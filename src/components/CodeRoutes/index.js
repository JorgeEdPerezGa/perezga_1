import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../CodePages/Welcome';
import Hyperspace from '../CodePages/Hyperspace';
import Headcount from '../CodePages/Headcount';
import MovieTracker from '../CodePages/MovieTracker';
import Weatherly from '../CodePages/Weatherly';
import CodeNav from '../CodeNav';

export const CodeRoutes = () => {
  return (
    <div>
      <Route path="/code" component={ CodeNav }/>
      <Route exact path="/code" component={ Welcome }/>
      <Route path="/code/hyperspace" component={ Hyperspace }/>
      <Route path="/code/headcount" component={ Headcount }/>
      <Route path="/code/movie-tracker" component={ MovieTracker }/>
      <Route path="/code/weatherly" component={ Weatherly }/>
    </div>
  );
};

export default CodeRoutes;
