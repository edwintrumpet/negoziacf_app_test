import React, { useEffect } from 'react';

import { useGlobalState, useDispatch } from './context';
import { getOwnUserAction } from './context/actions';
import { Home, Login, Splash } from './components/views';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getOwnUserAction(dispatch);
  }, []);

  const { user } = useGlobalState();
  if (user === undefined) return <Splash />;
  if (user) return <Home />;
  return <Login />;
}

export default App;
