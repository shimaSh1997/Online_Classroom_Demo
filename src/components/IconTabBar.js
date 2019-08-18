import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

iconMap = {
  home: "home",
  login: "sign-in-alt",
  profile: "user-tie"
};
const IconTabBar = ({ name }) => {
  const icon = iconMap[name];
  return <Icon name={icon} size={20} color="rgba(66,76,109,0.8)" />;
};

export default IconTabBar;
