import React, { useEffect, useState } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  IconButton,
} from '@material-ui/core';
import {
  Info, Edit, Delete,
} from '@material-ui/icons';

import { listUsersService, deleteUser } from '../../../services/users';
import useStyles from './ListOfUsers.styles';

import { Alert } from '../../organisms';

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const getUsers = async () => {
    try {
      const response = await listUsersService();
      if (response.message !== 'list of users') {
        setError({
          title: response.statusCode,
          error: response.error,
          message: response.message,
        });
      } else {
        setUsers(response.data);
      }
    } catch (err) {
      setError({
        title: '500',
        error: 'Internal Server error',
        message: 'Unknown error',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleCloseAlert = () => {
    setError('');
  };

  const handleDelete = async (idUser) => {
    await deleteUser(idUser);
    await getUsers();
  };

  const tableContent = users.map((user) => (
    <TableRow key={user.id}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell padding="checkbox">
        <IconButton>
          <Edit color="primary" />
        </IconButton>
      </TableCell>
      <TableCell padding="checkbox">
        <IconButton onClick={() => handleDelete(user.id)}>
          <Delete color="error" />
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  const voidContent = () => (
    <TableRow>
      <TableCell colSpan={5}>
        <Container className={classes.voidContainer}>
          <Typography className={classes.voidMessage}>
            {loading ? 'Cargando...' : 'No hay resultados'}
          </Typography>
          {
        loading
          ? <CircularProgress className={classes.voidIcon} />
          : <Info className={classes.voidIcon} />
      }
        </Container>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className={classes.rowHead}>
                <TableCell className={classes.colHead}>Nombre</TableCell>
                <TableCell className={classes.colHead}>Email</TableCell>
                <TableCell className={classes.colHead}>Rol</TableCell>
                <TableCell className={classes.colHead} />
                <TableCell className={classes.colHead} />
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length ? tableContent : voidContent()}
            </TableBody>
          </Table>
        </TableContainer>
        <Alert error={error} handleCloseAlert={handleCloseAlert} />
      </Container>
    </>
  );
};

export default ListOfUsers;
