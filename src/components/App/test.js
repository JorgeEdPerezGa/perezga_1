import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
