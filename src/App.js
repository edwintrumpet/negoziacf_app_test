import React, { useEffect, useState } from 'react';

import { useGlobalState, useDispatch } from './context';
import { getOwnUserAction } from './context/actions';
import { Home, Login, Splash } from './components/views';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getOwnUserAction(dispatch);
    setLoading(false);
  }, []);

  const { user } = useGlobalState();
  if (loading) return <Splash />;
  if (user) return <Home />;
  return <Login />;
}

export default App;
