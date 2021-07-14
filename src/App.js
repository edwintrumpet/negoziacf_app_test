import React, { useEffect, useState } from 'react';

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch } from './context';
import { getOwnUserAction } from './context/actions';
import {
  CreateUser,
  Home,
  Login,
  Splash,
} from './components/views';
import { ProtectedRoute, MainLayout } from './components/layouts';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getOwnUserAction(dispatch)
      .then(() => setLoading(false));
  }, []);

  if (loading) return <Splash />;
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MainLayout>
        <Switch>
          <ProtectedRoute exact path="/"><Home /></ProtectedRoute>
          <Route exact path="/login"><Login /></Route>
          <ProtectedRoute exact path="/user-create">
            <CreateUser />
          </ProtectedRoute>
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
