import React from 'react';
import { string, node } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useGlobalState } from '../../context';

const ProtectedRoute = ({ path, children }) => {
  const { user } = useGlobalState();
  if (!user) return <Redirect to="/login" />;
  return <Route path={path}>{children}</Route>;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  path: string.isRequired,
  children: node.isRequired,
};
