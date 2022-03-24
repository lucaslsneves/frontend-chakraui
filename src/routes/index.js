  
import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import Login from '../pages/login';
import SignUp from '../pages/signup';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Switch>
  );
}