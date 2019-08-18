import 'react-native';
import React from 'react';
import AppScreen from '../src/PlayGround/AppScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AppScreen />);
});
