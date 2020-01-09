import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen }
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;
