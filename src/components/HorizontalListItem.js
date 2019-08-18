import React from "react";
import { View, Text, Dimensions, PixelRatio, Image } from "react-native";
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

const HorizontalListItem = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View>
          <Image
            style={{
              width: calcWidth(15),
              height: calcWidth(15),
              borderRadius: 45
            }}
            source={props.choose}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              left: calcWidth(4),
              color: "rgba(83,58,75,1)",
              fontFamily: "Quicksand-Bold"
            }}
          >
            {props.sessionNumber}
          </Text>
          <Text
            style={{
              left: calcWidth(4),
              fontFamily: "Quicksand-Bold",
              color: "rgba(83,58,75,1)"
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              left: calcWidth(4),
              fontFamily: "Quicksand-Bold",
              color: "rgba(72,109,135,0.7)"
            }}
          >
            {props.time}
          </Text>
        </View>
      </View>
      <Text
        style={{
          left: calcWidth(4),
          fontFamily: "Quicksand-Bold",
          color: "rgba(151,181,185,0.7)"
        }}
      >
        {props.desc}
      </Text>
    </View>
  );
};
const styles = {
  containerStyle: {
    // borderBottomWidth: 0,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    elevation: 3,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    // height: 90,
    // width: 240,
    width: calcWidth(65),
    // marginLeft: 55,
    marginLeft: calcWidth(14),
    // padding: 10
    padding: calcHeight(1)
  }
};

export default HorizontalListItem;
