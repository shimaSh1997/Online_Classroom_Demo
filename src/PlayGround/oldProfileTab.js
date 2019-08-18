import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  PixelRatio,
  StyleSheet,
  Image,
  FlatList
} from "react-native";
import SessionData from "../components/data/ProfileData";
import SessionListItem from "../components/SessionListItem";
import FastImage from "react-native-fast-image";
import ProgressCircle from "react-native-progress-circle";
import ProgressCircleDemo from "../components/ProgressCircleDemo";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

class ProfileTab extends React.Component {
  state = { classData: SessionData };

  renderSessionListItem({ item, index }) {
    return (
      
        <SessionListItem
          session_name={item.session_name}
          deadline_date_for_assignment={item.deadline_date_for_assignment}
          attendance={item.attendance}
          assignment={item.assignment}
          done_assignment_before_deadline={item.done_assignment_before_deadline}
          session_desc={item.session_desc}
          deadline_time_for_assignment={item.deadline_time_for_assignment}
          title={item.title}
        />
    );
  }

  render() {
    return (
      <FastImage
        style={styles.container}
        source={{ uri: "blackgradient", priority: FastImage.priority.normal }}
        blurRadius={2}
      >
        <View style={styles.first_rectangle}>
          {/* <ProgressCircle
            percent={30}
            radius={25}
            borderWidth={5}
            // color="#3399FF"
            shadowColor="#999"
            bgColor="transparent"
          >
            <Text style={{ fontSize: 12, fontFamily: "Quicksand-bold" }}>
              {"50%"}
            </Text>
          </ProgressCircle> */}
          <ProgressCircleDemo totaldata = {this.state.classData} assignment={true}/>

          <Image
            style={{
              width: calcWidth(20),
              height: calcWidth(20),
              borderRadius: calcWidth(18)
            }}
            source={{ uri: "profile" }}
          />

          {/* <ProgressCircle
            percent={30}
            radius={25}
            borderWidth={5}
            color="#3399FF"
            shadowColor="#999"
            bgColor="transparent"
          >
            <Text style={{ fontSize: 12, fontFamily: "Quicksand-bold" }}>
              {"30%"}
            </Text>
          </ProgressCircle> */}
          <ProgressCircleDemo totaldata = {this.state.classData} assignment={false}/>
        </View>

        {/* view for text under progress Circle */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "yellow",
            top: calcWidth(-3)
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Quicksand-bold",
              marginLeft: calcWidth(12),
              color: "rgba(247,246,238,0.8)"
            }}
          >
            {"Assignments"}
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontFamily: "Quicksand-bold",
              marginRight: calcWidth(12),
              color: "rgba(247,246,238,0.8)"
            }}
          >
            {"Attendance"}
          </Text>
        </View>

        <View style={styles.second_rectangle}>
          <FlatList
            scrollEnabled={true}
            data={this.state.classData}
            renderItem={this.renderSessionListItem}
            keyExtractor={(item, index) => String(item.id)}
            // onLayout={() => this.FlatList.scrollToEnd({ animated: true })}
            contentContainerStyle={{ paddingBottom: calcHeight(20) }}
          />
        </View>

        <Image
          style={{
            position: "absolute",
            width: calcWidth(80),
            height: calcWidth(24),
            borderRadius: 3,
            left: calcWidth(10),
            top: calcWidth(42)
          }}
          source={require("../assets/image/rnbanner.jpg")}
        />
      </FastImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    resizeMode: "cover",
    flexDirection: "column"
  },
  first_rectangle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    top: calcWidth(7),
    marginLeft: "auto",
    marginRight: "auto",
    padding: calcHeight(5),
    flex: 0.23,
    backgroundColor: "rgba(120,157,183,0.3)",
    width: calcWidth(90)
  },
  second_rectangle: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "rgba(120,157,183,0.3)",
    // backgroundColor: "yellow",
    width: calcWidth(90),
    position: "relative",
    top: calcWidth(15),
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: calcWidth(3)
  }
});

export default ProfileTab;
