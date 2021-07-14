import React from 'react';
import {
  func, shape, string, oneOfType,
} from 'prop-types';
import { Snackbar } from '@material-ui/core';
import { Alert as AlertMui, AlertTitle } from '@material-ui/lab';

const Alert = ({ error, handleCloseAlert }) => (
  <Snackbar open={!!error} onClose={handleCloseAlert}>
    <AlertMui severity="error" onClose={handleCloseAlert}>
      <AlertTitle>
        Error
        {' '}
        {error.title}
        {' - '}
        {error.error}
      </AlertTitle>
      {error.message}
    </AlertMui>
  </Snackbar>
);

Alert.propTypes = {
  error: oneOfType([
    string,
    shape({
      title: string.isRequired,
      error: string.isRequired,
      message: string.isRequired,
    }),
  ]).isRequired,
  handleCloseAlert: func.isRequired,
};

export default Alert;
