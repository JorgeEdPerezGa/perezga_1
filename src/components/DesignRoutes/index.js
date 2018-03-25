import React from 'react';
import { Route } from 'react-router-dom';
import ComprehensiveLayoutOne from '../DesignPages/ComprehensiveLayoutOne';
import ComprehensiveLayoutTwo from '../DesignPages/ComprehensiveLayoutTwo';
import DesignNav from '../DesignNav';

export const CodeRoutes = () => {
  return (
    <div>
      <Route path="/design" component={ DesignNav }/>
      <Route path="/design/comp-one" component={ ComprehensiveLayoutOne }/>
      <Route path="/design/comp-two" component={ ComprehensiveLayoutTwo }/>
    </div>
  );
};

export default CodeRoutes;
