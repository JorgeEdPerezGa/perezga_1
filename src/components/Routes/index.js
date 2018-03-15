import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../Welcome';
import FineArts from '../Fine_Arts';

export const Routes = () => {
  return (
    <div>
      <Route path="/" component={ Welcome }/>
      <Route path="/finearts" component={ FineArts }/>
    </div>
  );
};

export default Routes;
