import { AppRegistry } from "react-native";
import Router from "./src/router/Router";
import { name as appName } from "./app.json";
import { YellowBox } from "react-native";

AppRegistry.registerComponent(appName, () => Router);
YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Module RCTImageLoader requires"
]);
