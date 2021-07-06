import React from 'react';
import { Typography } from '@material-ui/core';

import { useGlobalState } from '../../../context';

const Home = () => {
  const { user } = useGlobalState();
  return (
    <Typography variant="h1">
      Welcome
      {' '}
      {user}
      !
    </Typography>
  );
};

export default Home;
