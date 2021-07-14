import React, { useEffect, useState } from 'react';

import {
  HashRouter as Router,
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
import { ProtectedRoute } from './components/templates';

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
      <Switch>
        <ProtectedRoute exact path="/"><Home /></ProtectedRoute>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/user-create"><CreateUser /></Route>
        <Route path="*"><Splash /></Route>
      </Switch>
    </Router>
  );
}

export default App;
