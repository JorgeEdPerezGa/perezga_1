import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../DesignPages/Welcome';
import ComprehensiveLayoutOne from '../DesignPages/ComprehensiveLayoutOne';
import ComprehensiveLayoutTwo from '../DesignPages/ComprehensiveLayoutTwo';
import DesignNav from '../DesignNav';

export const CodeRoutes = () => {
  return (
    <div>
      <Route path="/design" component={ DesignNav }/>
      <Route exact path="/design" component={ Welcome }/>
      <Route path="/design/comp-one" component={ ComprehensiveLayoutOne }/>
      <Route path="/design/comp-two" component={ ComprehensiveLayoutTwo }/>
    </div>
  );
};

export default CodeRoutes;
