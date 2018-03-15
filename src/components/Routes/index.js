import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../Welcome';
import FineArts from '../Fine_Arts';
import Code from '../Code';

export const Routes = () => {
  return (
    <div>
      <Route path="/" component={ Welcome }/>
      <Route path="/finearts" component={ FineArts }/>
      <Route path="/code" component={ Code }/>
    </div>
  );
};

export default Routes;
