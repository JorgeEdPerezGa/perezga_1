import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Welcome from '../Welcome';

export const Routes = () => {
  return (
    <div>
      <Route path="/" component={ Welcome }/>
    </div>
  );
};

export default withRouter(Routes);
