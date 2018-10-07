import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';

import Home from './components/Home';
import Register from './components/LoginRegister/register';
import Login from './components/LoginRegister';
import UserDashboard from './components/User';

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/user/dashboard" exact component={UserDashboard} />
      </Layout>
    </Switch>
  );
};

export default Routes;
