import React from "react";
import {
  View,
  Text,
  Dimensions,
  PixelRatio,
  Image,
  Animated
} from "react-native";
import { Button, ThemeProvider } from "react-native-elements";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

export default class HorizontalItemConnectTab extends React.Component {
  constructor(props) {
    super(props);
  }
  _scrollX = new Animated.Value(0);

  render() {
    const inputRange = [
      (this.props.value - 2) * deviceWidth,
      (this.props.value - 1) * deviceWidth,
      this.props.value * deviceWidth,
      (this.props.value + 1) * deviceWidth
    ];

    const imageScale = this._scrollX.interpolate({
      inputRange,
      outputRange: [1, 0.4, 1, 0.4]
    });

    const imageOpacity = this._scrollX.interpolate({
      inputRange,
      outputRange: [1, 0.2, 1, 0.2]
    });

    const theme = {
      Button: {
        titleStyle: {
          color: "black"
        },
        buttonStyle: {
          color: "rgba(72,139,135,0.4)"
        }
      }
    };
    return (
      <Animated.View
        style={[
          styles.containerStyle,
          {
            transform: [
              {
                scale: imageScale
              }
            ],
            opacity: imageOpacity
          }
        ]}
      >
        <Image
          style={{
            width: calcWidth(15),
            height: calcWidth(15),
            borderRadius: 45
          }}
          source={this.props.profile_image}
        />

        <Text style={styles.job}>{this.props.job}</Text>

        <Button
          //   type="solid"
          title={this.props.btn}
          //   buttonStyle={color = "rgba(72,139,135,0.4)"}
          // titleStyle={{ color: 'black' }}
          buttonStyle={{
            backgroundColor: "rgba(72,139,135,0.4)",
            marginTop: calcWidth(3),
            padding: 3,
            width: calcWidth(30),
            borderRadius: calcWidth(15)
          }}
          titleStyle={{ color: "#000" }}
        />

        <Text style={styles.descriptionText}>{this.props.desc}</Text>
      </Animated.View>
    );
  }
}

const styles = {
  containerStyle: {
    borderWidth: 3,
    borderColor: "#FFFFFF",
    elevation: 2,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    // height: 90,
    // width: 240,
    width: calcWidth(65),
    marginLeft: calcWidth(20),
    // padding: 10
    padding: calcHeight(1),
    justifyContent: "center",
    alignItems: "center"
  },
  job: {
    marginTop: calcWidth(1)
  },
  descriptionText: {
    marginLeft: calcWidth(10),
    marginTop: calcWidth(3)
  }
};
