import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeTab from "../screens/HomeTab";
import ProfileTab from "../screens/ProfileTab";
import LoginTab from "../screens/LoginTab";
import TabBar from "../components/TabBar";
import IconTabBar from "../components/IconTabBar";

const TabNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: LoginTab,
      navigationOptions: {
        tabBarIcon: () => <IconTabBar name="login" />
      }
    },
    Home: {
      screen: HomeTab,
      navigationOptions: {
        tabBarIcon: () => <IconTabBar name="home" />
      }
    },
    Profile: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarIcon: () => <IconTabBar name="profile" />
      }
    }
  },
  {
    tabBarComponent: TabBar
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class Router extends React.Component {
  render() {
    return <AppContainer />;
  }
}
