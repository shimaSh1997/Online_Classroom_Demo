import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  PixelRatio
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

class SessionListItem extends Component {
  state = { expanded: false };

  toggle = () => {
    console.log("toggled");
    this.setState((prevState, newProps) => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    return (
      <View style={[(this.state.expanded ? styles.listItem_with_expand : styles.listItem_without_expand)]}>
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "blue",
            justifyContent: "space-around"
            // padding:calcHeight(2)
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Quicksand-Bold",
              fontSize: 22
            }}
          >
            {this.props.session_name}
          </Text>

          {/* start view for date and time */}
          <View style={{ flexDirection: "row", marginTop: calcWidth(2) }}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Quicksand-Bold",
                fontSize: 16,
                marginRight: calcWidth(5)
              }}
            >
              {this.props.deadline_date_for_assignment}
            </Text>

            <Text style={styles.textStyle}>
              {this.props.deadline_time_for_assignment}
            </Text>
          </View>
          {/* finish View for date and time text */}
        </View>

        {/* create title */}
        <Text
          numberOfLines={2}
          lineBreakMode="tail"
          style={{
            color: "#fff",
            fontFamily: "Quicksand-Bold",
            marginTop: calcWidth(3),
            marginLeft: calcWidth(8)
          }}
        >
          {this.props.title}
        </Text>
        {/* finishing title */}
        <View
          style={{
            // backgroundColor: "blue",
            // display:'flex',
            marginLeft: calcWidth(80)
          }}
        >
          {this.props.attendance ? (
            <Image
              style={{ width: 20, height: 20 }}
              source={{ uri: "checked" }}
            />
          ) : (
            <Image
              style={{ width: 20, height: 20 }}
              source={{ uri: "cross" }}
            />
          )}
        </View>

        {this.state.expanded && (
          <Text
            numberOfLines={3}
            lineBreakMode="tail"
            style={{
              color: "#fff",
              fontFamily: "Quicksand-Bold",
              marginLeft: calcWidth(9)
            }}
          >
            {this.props.session_desc}
          </Text>
        )}
        {/* finishing Description */}

        {/* finishing check attendence */}

        <View
          style={{
            height: calcWidth(8),
            flexDirection: "row",
            // backgroundColor: "yellow",
            zIndex:0,
            // width: "100%",
            // height: 20,
            marginTop: calcWidth(4),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              height: calcWidth(0.4),
              width: "42%",
              backgroundColor: "#fff",
              marginTop: calcWidth(1),
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />

          <TouchableOpacity onPress={this.toggle}>
            <Icon
              name={`ios-arrow-${this.state.expanded ? "up" : "down"}`}
              size={45}
              color="#fff"
            />
          </TouchableOpacity>

          <View
            style={{
              height: calcWidth(0.5),
              width: "42%",
              backgroundColor: "#fff",
              marginTop: calcWidth(1),
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem_without_expand: {
    // width: calcWidth(150),
    // display: "flex",
    // flex:0.5,
    flexDirection: "column",
    // backgroundColor: "green",
    top: calcWidth(7),
    height: calcWidth(35)
    // height: this.state.expanded ? calcWidth(55) : calcWidth(0)

  },
  listItem_with_expand: {
    // width: calcWidth(150),
    // display: "flex",
    // flex:0.5,
    flexDirection: "column",
    // backgroundColor: "green",
    top: calcWidth(7),
    height: calcWidth(55)
  },
  textStyle: {
    color: "#fff",
    fontFamily: "Quicksand-Bold",
    fontSize: 16
  }
});

export default SessionListItem;
