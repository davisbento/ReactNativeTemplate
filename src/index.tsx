import 'react-native-gesture-handler';

import { AppRegistry, YellowBox } from 'react-native';

import App from './App';

YellowBox.ignoreWarnings([
  '-[RCTRootView',
  'Warning: componentWillReceiveProps',
  'Warning: componentWillMount',
  'Warning: componentWillUpdate',
  'Attempted to invoke',
  'Native TextInput',
  'Task orphaned'
]);

AppRegistry.registerComponent('reactNativeApp', () => App);
