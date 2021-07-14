import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  CardHeader,
  Container,
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
  CircularProgress,
  LinearProgress,
} from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import useStyles from './CreateUser.styles';
import { createUserService } from '../../../services/users';
import { Alert } from '../../organisms';

const CreateUser = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const fields = [
    {
      name: 'email',
      label: 'Correo electrónico',
      default: '',
      validation: Yup.string()
        .email('Formato de correo electrónico inválido')
        .required('El correo electrónico es requerido'),
    },
    {
      name: 'password',
      label: 'Contraseña',
      default: '',
      validation: Yup.string().required('La contraseña es requerida'),
    },
    {
      name: 'name',
      label: 'Nombre',
      default: '',
      validation: Yup.string().required('El nombre es requerido'),
    },
    {
      name: 'role',
      label: 'Rol',
      default: '',
      validation: Yup.mixed()
        .oneOf(['admin', 'user'], 'Debe ser uno de los siguientes valores (admin, user)')
        .required('El rol es requerido'),
    },
  ];

  const initialValues = () => {
    const values = {};
    for (const field of fields) {
      values[field.name] = field.default;
    }
    return values;
  };

  const validationSchema = () => {
    const validationObject = {};
    for (const field of fields) {
      validationObject[field.name] = field.validation;
    }
    return Yup.object().shape(validationObject);
  };

  const inputs = ({
    errors, touched, handleBlur, handleChange, values,
  }) => fields.map((field) => (
    <TextField
      key={field.name}
      autoComplete={field.name}
      className={classes.input}
      disabled={loading}
      error={errors[field.name] && touched[field.name]}
      fullWidth
      helperText={
      errors[field.name] && touched[field.name]
        ? errors[field.name]
        : ''
    }
      label={field.label}
      name={field.name}
      onBlur={handleBlur(field.name)}
      onChange={handleChange(field.name)}
      type="text"
      value={values[field.name]}
      variant="outlined"
    />
  ));

  const handleCloseAlert = () => {
    setError('');
  };

  const onSubmit = async (values) => {
    setLoading(true);
    const response = await createUserService(values);
    if (response.message !== 'user created') {
      setError({
        title: response.statusCode,
        error: response.error,
        message: response.message,
      });
    } else {
      history.push('/');
    }
    setLoading(false);
  };

  return (
    <Container className={classes.root}>
      <Card>
        {loading && <LinearProgress />}
        <CardHeader title="Nuevo usuario" />
        <Formik
          initialValues={initialValues()}
          onSubmit={onSubmit}
          validationSchema={validationSchema()}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <CardContent>
                {inputs({
                  errors, touched, handleBlur, handleChange, values,
                })}
              </CardContent>
              <CardActions className={classes.actions}>
                <Button
                  color="primary"
                  disabled={
                  !!(
                    !touched[fields[0].name]
                  || errors[fields[0].name]
                  || errors[fields[1].name]
                  || loading
                  )
                }
                  endIcon={loading ? <CircularProgress size={20} /> : <PersonAdd />}
                  type="submit"
                  variant="contained"
                >
                  Crear usuario
                </Button>
              </CardActions>
            </form>
          )}
        </Formik>
      </Card>
      <Alert error={error} handleCloseAlert={handleCloseAlert} />
    </Container>
  );
};

export default CreateUser;
