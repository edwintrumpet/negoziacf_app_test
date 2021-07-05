import React from 'react';

import { Home, Login, Splash } from './components/views';

const user = '';
const loading = true;

function App() {
  if (loading) return <Splash />;
  if (user) return <Home />;
  return <Login />;
}

export default App;
