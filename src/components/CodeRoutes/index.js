import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../CodePages/Welcome';
import Hyperspace from '../CodePages/Hyperspace';
import Headcount from '../CodePages/Headcount';
import CodeNav from '../CodeNav';

export const CodeRoutes = () => {
  return (
    <div>
      <Route path="/code" component={ CodeNav }/>
      <Route exact path="/code" component={ Welcome }/>
      <Route path="/code/hyperspace" component={ Hyperspace }/>
      <Route path="/code/headcount" component={ Headcount }/>
    </div>
  );
};

export default CodeRoutes;
