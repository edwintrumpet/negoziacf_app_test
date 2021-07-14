import React from 'react';

import { useGlobalState } from '../../../context';
import ListOfUsers from '../ListOfUsers/ListOfUsers';
import UserProfile from '../UserProfile/UserProfile';

const Home = () => {
  const { user: { role } } = useGlobalState();
  if (role === 'admin') {
    return <ListOfUsers />;
  }
  return <UserProfile />;
};

export default Home;
