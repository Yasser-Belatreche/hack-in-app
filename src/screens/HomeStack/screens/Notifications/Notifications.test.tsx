import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import {fireEvent, render} from '@testing-library/react-native';

import {Notifications} from './Notifications';

describe('HomeStack -> Notifications Screen', () => {
  const props: any = {};

  it('should renders correctly', () => {
    const tree = renderer.create(<Notifications {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
