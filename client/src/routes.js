import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';


import Home from './components/Home';
import Register from './components/LoginRegister/register';
import Login from './components/LoginRegister';
import UserDashboard from './components/User';

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
      </Layout>
    </Switch>
  );
};

export default Routes;
