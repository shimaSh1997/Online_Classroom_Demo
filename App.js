import React from "react";
import { View, Text} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./src/screens/SettingsTab";
import AnotherScreen from "./src/screens/ProfileTab"; 
import HomeScreen from "./src/screens/HomeTab";


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    newScreen: {
      screen: AnotherScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
