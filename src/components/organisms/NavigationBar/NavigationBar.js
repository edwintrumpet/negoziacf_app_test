import React from 'react';
import {
  AppBar, Typography, Button, Toolbar,
} from '@material-ui/core';
import { PowerSettingsNew } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { useDispatch } from '../../../context';
import { logoutAction } from '../../../context/actions';
import useStyles from './NavigationBar.styles';

const NavigationBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    await logoutAction(dispatch);
    history.push('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.barTitle}>Negozia</Typography>
        <Button className={classes.link} onClick={() => history.push('/user-create')}>
          Crear usuario
        </Button>
        <Button
          className={classes.link}
          endIcon={<PowerSettingsNew />}
          onClick={handleLogout}
        >
          Salir
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
