import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';
import HomePage from './containers/HomePage';
import MaterialUIPage from './containers/MaterialUIPage';

const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/demo" component={MaterialUIPage} />
      <Route path="*" component={HomePage} />
    </Switch>
  </Router>
);

export default AppRoutes;