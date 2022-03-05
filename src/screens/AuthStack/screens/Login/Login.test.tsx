import React from 'react';
import {Login} from './Login';
import renderer from 'react-test-renderer';

describe('Login Screen', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
