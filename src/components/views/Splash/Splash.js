import React from 'react';
import {
  CircularProgress, Container, Typography,
} from '@material-ui/core';

import useStyles from './Splash.styles';

const Splash = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title} gutterBottom>
        Negozia Consumer Finance
      </Typography>
      <CircularProgress size={80} className={classes.icon} />
    </Container>
  );
};

export default Splash;
