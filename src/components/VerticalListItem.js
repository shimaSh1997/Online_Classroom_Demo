import React from "react";
import { View, Text, Dimensions, PixelRatio, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

const VerticalListItem = props => {
  return (
    <View style={styles.container}>
      {/* Start first vertical cardview */}
      <View style={styles.card_view}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: calcWidth(2)
          }}
        >
          <Image
            style={{
              width: calcWidth(15),
              height: calcWidth(15),
              borderRadius: 45
            }}
            source={props.choose}
          />

          <View
            style={{
              display: "flex",
              backgroundColor: "rgba(72,139,135,0.4)",
              borderRadius: calcWidth(2),
              height: calcHeight(5),
              justifyContent: "center",
              paddingLeft: calcWidth(2),
              paddingRight: calcWidth(2),
              marginTop: calcWidth(2)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "Quicksand-Bold"
              }}
            >
              {props.job}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: calcWidth(2) }}>
          <Text
            style={{ color: "rgba(83,58,75,1)", fontFamily: "Quicksand-Bold" }}
          >
            {props.sessionNumber}
          </Text>
        </View>

        <Text
          style={{
            color: "rgba(66,76,109,1)",
            // marginLeft: calcWidth(0),
            fontFamily: "Quicksand-Bold",
            fontWeight: "200"
          }}
        >
          {props.title}
        </Text>
        {/* creating images profile row */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 5
          }}
        >
          <Image
            style={{
              width: calcWidth(8),
              height: calcWidth(8),
              borderRadius: 45
            }}
            source={props.image}
          />
          <Image
            style={{
              width: calcWidth(8),
              height: calcWidth(8),
              borderRadius: 45
            }}
            source={props.choose}
          />

          <Image
            style={{
              width: calcWidth(8),
              height: calcWidth(8),
              borderRadius: 45
            }}
            source={props.image}
          />

          <Icon
            style={{ marginTop: calcWidth(0.7) }}
            name="plus-circle"
            size={calcWidth(7)}
            color="rgba(109,123,129,1)"
            onPress={() => alert("Adding another Profile")}
          />
        </View>
        {/* finishing row of profile image */}
      </View>
      {/* finish first vertical cardview  */}

      <View style={styles.card_view}>
      <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: calcWidth(2)
          }}
        >
          <Image
            style={{
              width: calcWidth(15),
              height: calcWidth(15),
              borderRadius: 45
            }}
            source={props.image}
          />

          <View
            style={{
              display: "flex",
              backgroundColor: "rgba(72,139,135,0.4)",
              borderRadius: calcWidth(2),
              height: calcHeight(5),
              justifyContent: "center",
              paddingLeft: calcWidth(2),
              paddingRight: calcWidth(2),
              marginTop: calcWidth(2)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "Quicksand-Bold"
              }}
            >
              {props.job}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: calcWidth(2) }}>
          <Text
            style={{ color: "rgba(83,58,75,1)", fontFamily: "Quicksand-Bold" }}
          >
            {props.sessionNumber}
          </Text>
        </View>

        <Text
          style={{
            color: "rgba(66,76,109,1)",
            // marginLeft: calcWidth(0),
            fontFamily: "Quicksand-Bold",
            fontWeight: "200"
          }}
        >
          {props.title}
        </Text>
        {/* creating images profile row */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 5
          }}
        >
          <Image
            style={{
              width: calcWidth(8),
              height: calcWidth(8),
              borderRadius: 45
            }}
            source={props.choose}
          />
          <Image
            style={{
              width: calcWidth(8),
              height: calcWidth(8),
              borderRadius: 45
            }}
            source={props.image}
          />

          <Image
            style={{
              width: calcWidth(8),
              height: calcWidth(8),
              borderRadius: 45
            }}
            source={props.choose}
          />

          <Icon
            style={{ marginTop: calcWidth(0.7) }}
            name="plus-circle"
            size={calcWidth(7)}
            color="rgba(109,123,129,1)"
            onPress={() => alert("Adding another Profile")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: calcHeight(1),
    // backgroundColor:'blue',
    // height: calcHeight(26)
    height: calcWidth(43)
  },
  card_view: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    elevation: 5,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    // width: 240,
    width: calcWidth(43),
    // marginLeft: 55,
    // marginLeft: calcWidth(14),
    // padding: 10
    padding: calcHeight(1)
    // height: calcWidth(30)
  }
};

export default VerticalListItem;
