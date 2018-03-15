import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav';
import Welcome from '../Welcome';
import FineArts from '../Fine_Arts';
import Code from '../Code';
import Design from '../Design';

export const Routes = () => {
  return (
    <div>
      <Route path="/" component={ Nav }/>
      <Route exact path="/" component={ Welcome }/>
      <Route path="/finearts" component={ FineArts }/>
      <Route path="/code" component={ Code }/>
      <Route path="/design" component={ Design }/>
    </div>
  );
};

export default Routes;
