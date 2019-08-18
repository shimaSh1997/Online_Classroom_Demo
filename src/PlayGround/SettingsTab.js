import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PixelRatio,
  FlatList,
  ScrollView,
  StatusBar,
  Animated,
  Image
} from "react-native";
import FastImage from "react-native-fast-image";
import ConnectionData from "../components/data/ConnectionData";
// import HorizontalItemConnectTab from "../components/HorizontalItemConnectTab";
import { Button, Header, Badge } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

export const LeftCostomComponent = props => {
  return (
    <Icon
      style={{ marginLeft: calcWidth(5) }}
      name="arrow-left"
      size={calcWidth(5)}
      color="rgba(119,51,68,1)"
    />
  );
};
export const RightCostomComponent = props => {
  return (
    <Icon
      style={{ marginRight: calcWidth(5) }}
      name="comment"
      size={calcWidth(5)}
      color="rgba(119,51,68,1)"
    />
  );
};
class SettingsTab extends React.Component {
  state = { horizontal_list_data: ConnectionData };

  _scrollX = new Animated.Value(0);

  static navigationOptions = {
    header: null
  };
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {/* <View style={styles.square} /> */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this._scrollX } } }],
            { useNativeDriver: true }
          )}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {this.state.horizontal_list_data.map((item, i) =>
            this.renderHorizontalListItem(item, i)
          )}
        </Animated.ScrollView>
      </View>
    );
  }

  renderHorizontalListItem = (item, index) => {
    const inputRange = [
      (index - 2) * deviceWidth,
      (index - 1) * deviceWidth,
      index * deviceWidth,
      (index + 1) * deviceWidth
    ];

    const imageScale = this._scrollX.interpolate({
      inputRange,
      outputRange: [1, 0.4, 1, 0.4]
    });

    const imageOpacity = this._scrollX.interpolate({
      inputRange,
      outputRange: [1, 0.2, 1, 0.2]
    });
    return (
      <Animated.View
        key={item.id}
        style={[
          styles.container,
          styles.itemStyle,
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
        <View style={styles.square} />
        <View style={styles.card_one}>
          <Image
            style={{
              width: calcWidth(20),
              height: calcWidth(20),
              borderRadius: 45,
              borderWidth: 1,
              // borderColor: "rgba(72,109,135,0.4)"
              borderColor: "#773344"
            }}
            source={item.profile}
          />
          <Badge
            badgeStyle={{ backgroundColor: "#rgba(13,2,33,0.5)" }}
            status="success"
            containerStyle={{
              left: calcWidth(42),
              top: calcWidth(3),
              position: "absolute"
            }}
            value="99"
          />

          <Text style={styles.teacherName}>{item.teacher_name}</Text>

          <Text style={styles.job}>{item.job}</Text>

          <Button
            //type="solid"
            title={item.btn_name}
            //buttonStyle={color = "rgba(72,139,135,0.4)"}
            // titleStyle={{ color: 'black' }}
            buttonStyle={{
              backgroundColor: "#E3B5A4",
              marginTop: calcWidth(3),
              width: calcWidth(40),
              borderRadius: calcWidth(15)
            }}
            titleStyle={{ color: "#FEFFFE", fontFamily: "Quicksand-Bold" }}
          />

          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <View style={styles.containerStyle}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: calcWidth(2)
            }}
          >
            <Text
              style={{
                fontFamily: "Quicksand-Bold",
                color: "rgba(66,76,109,1)"
              }}
            >
              Class
            </Text>
            <Icon
              style={{ marginLeft: calcWidth(5) }}
              name="heart"
              size={calcWidth(5)}
              color="#EF767A"
            />
          </View>
          <View style={{ height: 1, backgroundColor: "#eee" }} />
          <View style={{ flexDirection: "row", padding: calcWidth(2) }}>
            {/* first row */}
            <Image
              style={{
                width: calcWidth(12),
                height: calcWidth(12),
                borderRadius: 45
              }}
              source={item.image}
            />
            <View
              style={{
                flexDirection: "column",
                marginLeft: calcWidth(5),
                marginTop: calcWidth(1)
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.number}>{item.number}</Text>
            </View>
          </View>
          {/* finish first row */}

          <View style={{ flexDirection: "row", padding: calcWidth(2) }}>
            {/* first row */}
            <Image
              style={{
                width: calcWidth(12),
                height: calcWidth(12),
                borderRadius: 45
              }}
              source={item.image}
            />
            <View
              style={{
                flexDirection: "column",
                marginLeft: calcWidth(5),
                marginTop: calcWidth(1)
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.number}>{item.number}</Text>
            </View>
          </View>
          {/* finish first row */}
        </View>
      </Animated.View>
    );
  };
}

const styles = StyleSheet.create({
  card_one: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    // backgroundColor: "blue",
    width: calcWidth(75),
    marginTop: calcWidth(8),
    // backgroundColor: "rgba(232,95,92,1)",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: calcWidth(30),
    padding: calcWidth(3),
    borderWidth: 3,
    borderColor: "#FFFFFF",
    elevation: 2
  },
  container: {
    display: "flex",
    flex: 1,
    position: "relative",
    // backgroundColor: "blue",
    flexDirection: "column"
  },
  option: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  itemStyle: {
    width,
    height,
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "#FFFFFF",
    // backgroundColor: "blue",
    padding: 2
    // top: calcWidth(25)
  },
  list_container: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    backgroundColor: "green",
    // "80%"
    // width: "100%",
    // height: "100%",
    // top: calcWidth(32)*0.9  ,
    top: calcHeight(19) * 0.9

    // height: calcHeight(100)
    // left: calcWidth(10)
  },
  horizontal_list_container: {
    display: "flex"
  },
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  containerStyle: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    width: calcWidth(75),
    // marginLeft: calcWidth(1),
    // padding: 10
    // padding: calcHeight(2),
    marginTop: calcWidth(8),
    backgroundColor: "#FFF",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    elevation: 2
  },
  job: {
    marginTop: calcWidth(1),
    fontFamily: "Quicksand-Bold",
    fontWeight: "100",
    color: "rgba(66,76,109,1)"
  },
  descriptionText: {
    marginLeft: calcWidth(10),
    marginTop: calcWidth(3),
    fontFamily: "Quicksand-Bold",
    color: "rgba(66,76,109,1)"
  },
  teacherName: {
    marginTop: calcWidth(2),
    color: "rgba(66,76,109,1)",
    // marginLeft: calcWidth(0),
    fontFamily: "Quicksand-Bold",
    fontWeight: "200"
  },
  title: {
    fontFamily: "Quicksand-Bold",
    color: "rgba(66,76,109,1)"
  },
  number: {
    fontFamily: "Quicksand-Bold",
    color: "rgba(66,76,109,1)",
  },
  square: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height: height * 0.3,
    padding: calcHeight(5),
    flexDirection: "column",
    // width: "100%",
    // height: "40%"
    backgroundColor: "rgba(109,123,129,1)",
    // backgroundColor: "rgba(255,184,56,0.8)",
    borderBottomLeftRadius: calcHeight(5),
    borderBottomRightRadius: calcHeight(5)
  }
});

export default SettingsTab;
