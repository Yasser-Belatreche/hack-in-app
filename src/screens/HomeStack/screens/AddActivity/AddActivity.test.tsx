import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import {fireEvent, render} from '@testing-library/react-native';

import {AddActivity} from './AddActivity';

describe('HomeStack -> AddActivity Screen', () => {
  const props: any = {};

  it('should renders correctly', () => {
    const tree = renderer.create(<AddActivity {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
