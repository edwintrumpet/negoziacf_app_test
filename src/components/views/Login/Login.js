import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import * as Yup from 'yup';

import { useDispatch } from '../../../context';
import { login } from '../../../context/actions';
import useStyles from './Login.styles';

const Login = () => {
  const classes = useStyles();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const dispatch = useDispatch();

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

  const onSubmit = (values) => {
    login(dispatch, values.email);
  };
  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Bienvenido" className={classes.title} />
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

                <TextField
                  autoComplete={fields[0].name}
                  autoFocus
                  className={classes.input}
                  error={errors[fields[0].name] && touched[fields[0].name]}
                  fullWidth
                  helperText={
                    errors[fields[0].name] && touched[fields[0].name]
                      ? errors[fields[0].name]
                      : ''
                  }
                  label={fields[0].label}
                  name={fields[0].name}
                  onBlur={handleBlur(fields[0].name)}
                  onChange={handleChange(fields[0].name)}
                  type={fields[0].name}
                  value={values[fields[0].name]}
                  variant="outlined"
                />
                <TextField
                  className={classes.input}
                  error={errors[fields[1].name] && touched[fields[1].name]}
                  fullWidth
                  helperText={
                    errors[fields[1].name] && touched[fields[1].name]
                      ? errors[fields[1].name]
                      : ''
                  }
                  label={fields[1].label}
                  name={fields[1].name}
                  onBlur={handleBlur(fields[1].name)}
                  onChange={handleChange(fields[1].name)}
                  type={passwordVisibility ? 'text' : 'password'}
                  value={values[fields[1].name]}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={
                            () => setPasswordVisibility(!passwordVisibility)
                          }
                        >
                          {
                          passwordVisibility
                            ? <Visibility />
                            : <VisibilityOff />
                          }
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </CardContent>
              <CardActions className={classes.actions}>
                <Button
                  disabled={
                    !!(
                      !touched[fields[0].name]
                    || errors[fields[0].name]
                    || errors[fields[1].name]
                    )
                  }
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Iniciar sesión
                </Button>
              </CardActions>
            </form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default Login;
