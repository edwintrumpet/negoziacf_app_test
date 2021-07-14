import React from 'react';
import { node } from 'prop-types';
import { useLocation } from 'react-router-dom';

import { NavigationBar } from '../organisms';

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/login' && <NavigationBar />}
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
