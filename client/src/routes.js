import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import AddProduct from './components/User/addProduct';
import Register from './components/LoginRegister/register';
import Login from './components/LoginRegister';
import ManageCategories from './components/User/manageCategories';
import UserDashboard from './components/User';
import Shop from './components/Shop';

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route
          path="/admin/add-product"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/manage-categories"
          exact
          component={Auth(ManageCategories, true)}
        />

        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/register" exact component={Auth(Register, false)} />

        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
      </Layout>
    </Switch>
  );
};

export default Routes;
