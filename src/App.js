import React from 'react';

import { useGlobalState } from './context';
import { Home, Login, Splash } from './components/views';

function App() {
  const { user } = useGlobalState();
  if (user === undefined) return <Splash />;
  if (user) return <Home />;
  return <Login />;
}

export default App;
