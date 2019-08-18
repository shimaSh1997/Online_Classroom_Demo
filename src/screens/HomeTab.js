import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  FlatList
} from "react-native";
import HorizontalListItem from "../components/HorizontalListItem";
import VerticalListItem from "../components/VerticalListItem";
import data from "../components/data/AssignmentData";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

class HomeTab extends React.Component {
  state = { horizontal_list_data: data };

  renderListItem({ item, index }) {
    return (
      <HorizontalListItem
        sessionNumber={item.name}
        image={item.profile}
        title={item.title}
        time={item.time}
        desc={item.desc}
        choose={item.choose}
        // presence={item.presence}
        // id={item.id}
      />
    );
  }

  renderVerticalListItem({ item, index }) {
    return (
      <VerticalListItem
        sessionNumber={item.name}
        image={item.profile}
        title={item.title}
        time={item.time}
        desc={item.desc}
        job={item.job}
        choose={item.choose}
      />
    );
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square}>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "400",
                color: "rgba(247,246,238,1)",
                fontFamily: "Quicksand-Bold"
              }}
            >
              Classroom
            </Text>
          </View>
          <View style={{ marginTop: calcHeight(2) }}>
            <Text
              style={{
                fontSize: 16,
                color: "rgba(247,246,238,0.8)",
                fontFamily: "Quicksand-bold",
                fontWeight: "400"
              }}
            >
              Your Assignment
            </Text>
          </View>
        </View>
        <View style={styles.list_container}>
          <View style={styles.horizontal_list_container}>
            <FlatList
              horizontal
              // scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.horizontal_list_data}
              renderItem={this.renderListItem}
              keyExtractor={(item, index) => String(item.id)}
              // ItemSeparatorComponent={ () => <View style={ { width: 4, height: 10, backgroundColor: 'red' } } /> }
            />
          </View>
          <View style={styles.text_class}>
            <Text
              style={{
                marginTop: calcHeight(2),
                color: "rgba(109,123,129,1)",
                fontFamily: "Quicksand-bold",
                fontWeight: "200",
                fontSize: 17
              }}
            >
              My Class
            </Text>
          </View>

          <View style={styles.vertical_list_container}>
            <FlatList
              ref={ref => (this.FlatList = ref)}
              scrollEnabled={true}
              data={this.state.horizontal_list_data}
              renderItem={this.renderVerticalListItem}
              keyExtractor={(item, index) => String(item.id)}
              // onContentSizeChange={() =>
              //   this.FlatList.scrollToEnd({ animated: true })
              // }
              // onLayout={() => this.FlatList.scrollToEnd({ animated: true })}
              contentContainerStyle={{ paddingBottom: calcHeight(70) }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    position: "relative",
    backgroundColor: "rgba(109,123,129,0.3)",
    flexDirection: "column"
    // width:"100%",
    // height:"100%"
  },
  square: {
    position: "relative",
    top: 0,
    left: 0,
    padding: calcHeight(5),
    flex: 0.2,
    flexDirection: "column",
    backgroundColor: "rgba(109,123,129,1)",
    borderBottomLeftRadius: calcHeight(5),
    borderBottomRightRadius: calcHeight(5)
  },
  list_container: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: calcHeight(19) * 0.9
  },
  horizontal_list_container: {
    display: "flex"
  },
  text_class: {
    marginLeft: calcWidth(5)
  },

  vertical_list_container: {
    height: calcWidth(190)
  }
});
