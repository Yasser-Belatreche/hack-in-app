import React from 'react';
import {LoginOrSignup} from './LoginOrSignup';
import renderer from 'react-test-renderer';

describe('LoginOrSignup Screen', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<LoginOrSignup />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
