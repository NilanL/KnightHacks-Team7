import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import { createStackNavigator } from "react-navigation-stack"; 
import { createAppContainer } from "react-navigation"; 
import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import SearchScreen from './screens/SearchScreen';
import FiltersScreen from './screens/FiltersScreen';
import SplashScreen from './screens/SplashScreen';

export default class App extends React.Component { 
 render() { 
 return <AppContainer />; 
 } 
}

const AppNavigator = createStackNavigator({ 
 Home: { 
  screen: HomeScreen, 
      navigationOptions: { 
        header: null // Will hide header for HomePage 
        } 
      },
  Search: { 
  screen: SearchScreen, 
      navigationOptions: { 
        header: null // Will hide header for HomePage 
        } 
      },
  Filter: { 
  screen: FiltersScreen, 
      navigationOptions: { 
        header: null // Will hide header for HomePage 
        } 
      }, 
  Splash: { 
  screen: SplashScreen, 
      navigationOptions: { 
        header: null // Will hide header for HomePage 
        } 
      }, 
  },{ 
  initialRouteName: "Home" 
});

const AppContainer = createAppContainer(AppNavigator);