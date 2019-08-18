import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Linking
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Dialog, { DialogContent } from "react-native-popup-dialog";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);

export default class LoginTab extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    signIn: false,
    signUp: false,
    default: true,
    visible: false
  };

  buttonSignInPress = () => {
    this.setState({ signIn: true, signUp: false });
  };

  buttonSignUpPress = () => {
    this.setState({ signUp: true, signIn: false });
  };

  changeUsername = text => {
    this.setState({ username: text });
  };

  changeEmail = text => {
    this.setState({ email: text });
  };
  changePassword = text => {
    this.setState({ password: text });
  };
  render() {
    const url_designer =
      "https://dribbble.com/shots/5941480-Classroom-Design-App";
    const url_github = "https://github.com/shimaSh1997";
    return (
      <View style={styles.container}>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent
            style={{
              backgroundColor: "#F0B27A",
              width: calcWidth(55),
              height: calcWidth(45),
              borderRadius: calcWidth(1),
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#A569BD", fontFamily: "Quicksand-Bold" }}>
              This Awsome app is designated for online classrooms. {" "}
              <Text style={{ color: "#A569BD", fontFamily: "Quicksand-Bold" }}>
                The UI is designed by  <Text
                  onPress={() => Linking.openURL(url_designer)}
                  style={{ color: "#D35400" }}
                >
                  Kevin Diansyah.{" "}
                </Text>
               
              </Text>
              You can see the source code on my 
              <Text onPress={() => Linking.openURL(url_github)} style={{ color: "#D35400" }}> Github Page. </Text>
              
            </Text>
          </DialogContent>
        </Dialog>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: calcWidth(-10)
          }}
        >
          <Image
            style={{ width: calcWidth(25), height: calcWidth(25) }}
            source={{ uri: "classroom" }}
          />
          <Text
            style={{
              color: "#4F6075",
              fontFamily: "Quicksand-Bold",
              fontWeight: "400",
              fontSize: 25
            }}
          >
            IMIN
          </Text>
          <Text style={{ color: "#4F6075", fontFamily: "Quicksand-Bold" }}>
            Online Classroom For Everybody
          </Text>
        </View>

        <View style={styles.square}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Button
              titleStyle={{ color: "#4F6075", fontFamily: "Quicksand-Bold" }}
              buttonStyle={
                this.state.signIn ? styles.buttonActive : styles.buttonDisactive
              }
              title="Sign in"
              type="clear"
              onPress={() => this.buttonSignInPress()}
            />
            <Button
              title="Sign up"
              type="clear"
              titleStyle={{ color: "#4F6075", fontFamily: "Quicksand-Bold" }}
              buttonStyle={
                this.state.signUp ? styles.buttonActive : styles.buttonDisactive
              }
              onPress={() => this.buttonSignUpPress()}
            />
          </View>
          {/*added this for true keyboardAvoidingView in android */}
          {/*android:windowSoftInputMode="adjustResize"*/}
          {this.state.signUp || this.state.signIn || (
            <KeyboardAvoidingView enabled behavior="padding">
              <TextInput
                inlineImageLeft="user"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Username"
                onChangeText={this.changeUsername.bind(this)}
                value={this.state.username}
              />
              <TextInput
                inlineImageLeft="email"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Email Address"
                onChangeText={this.changeEmail.bind(this)}
                value={this.state.email}
                keyboardType="email-address"
              />
              <TextInput
                inlineImageLeft="password"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Password"
                onChangeText={this.changePassword.bind(this)}
                value={this.state.password}
              />
              <Button
                titleStyle={{ color: "#4F6075", fontFamily: "Quicksand-Bold" }}
                buttonStyle={{
                  backgroundColor: "#3498DB",
                  marginTop: calcWidth(5),
                  borderRadius: calcWidth(3)
                }}
                title="Sign Up"
                type="solid"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon
                  style={{ marginTop: calcWidth(5) }}
                  name="github-square"
                  size={calcWidth(7)}
                  color="#09090B"
                  onPress={() => this.setState({ visible: true })}
                />
                <Icon
                  style={{ marginTop: calcWidth(5), marginLeft: calcWidth(3) }}
                  name="pinterest-square"
                  size={calcWidth(7)}
                  color="#C0392B"
                />

                <Icon
                  style={{ marginTop: calcWidth(5), marginLeft: calcWidth(3) }}
                  name="reddit-square"
                  size={calcWidth(7)}
                  color="#F39C12"
                />
              </View>
            </KeyboardAvoidingView>
          )}
          {this.state.signUp && (
            <KeyboardAvoidingView enabled behavior="padding">
              <TextInput
                inlineImageLeft="user"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Username"
                onChangeText={this.changeUsername.bind(this)}
                value={this.state.username}
              />
              <TextInput
                inlineImageLeft="email"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Email Address"
                onChangeText={this.changeEmail.bind(this)}
                value={this.state.email}
                keyboardType="email-address"
              />
              <TextInput
                inlineImageLeft="password"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Password"
                onChangeText={this.changePassword.bind(this)}
                value={this.state.password}
              />

              <Button
                titleStyle={{ color: "#4F6075", fontFamily: "Quicksand-Bold" }}
                buttonStyle={{
                  backgroundColor: "#3498DB",
                  marginTop: calcWidth(5),
                  borderRadius: calcWidth(3)
                }}
                title="Sign Up"
                type="solid"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon
                  style={{ marginTop: calcWidth(5) }}
                  name="github-square"
                  size={calcWidth(7)}
                  color="#09090B"
                  onPress={() => this.setState({ visible: true })}
                />
                <Icon
                  style={{ marginTop: calcWidth(5), marginLeft: calcWidth(3) }}
                  name="pinterest-square"
                  size={calcWidth(7)}
                  color="#C0392B"
                  onPress={() => alert("Adding another Profile")}
                />

                <Icon
                  style={{ marginTop: calcWidth(5), marginLeft: calcWidth(3) }}
                  name="reddit-square"
                  size={calcWidth(7)}
                  color="#F39C12"
                  onPress={() => alert("Adding another Profile")}
                />
              </View>
            </KeyboardAvoidingView>
          )}
          {this.state.signIn && (
            <KeyboardAvoidingView enabled behavior="padding">
              <TextInput
                inlineImageLeft="user"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Username"
                onChangeText={this.changeUsername.bind(this)}
                value={this.state.username}
              />
              <TextInput
                inlineImageLeft="password"
                inlineImagePadding={8}
                style={styles.inputStyle}
                placeholder="Password"
                onChangeText={this.changePassword.bind(this)}
                value={this.state.password}
              />
              <Text
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: calcWidth(5),
                  fontFamily: "Quicksand-Bold",
                  color: "rgba(72,139,135,1)"
                }}
              >
                Forgot Password?
              </Text>
              <Button
                titleStyle={{ color: "#4F6075", fontFamily: "Quicksand-Bold" }}
                buttonStyle={{
                  backgroundColor: "#3498DB",
                  marginTop: calcWidth(5),
                  borderRadius: calcWidth(3)
                }}
                title="Sign In"
                type="solid"
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon
                  style={{ marginTop: calcWidth(5) }}
                  name="github-square"
                  size={calcWidth(7)}
                  color="#09090B"
                  onPress={() => this.setState({ visible: true })}
                />
                <Icon
                  style={{ marginTop: calcWidth(5), marginLeft: calcWidth(3) }}
                  name="pinterest-square"
                  size={calcWidth(7)}
                  color="#C0392B"
                  onPress={() => alert("Adding another Profile")}
                />

                <Icon
                  style={{ marginTop: calcWidth(5), marginLeft: calcWidth(3) }}
                  name="reddit-square"
                  size={calcWidth(7)}
                  color="#F39C12"
                  onPress={() => alert("Adding another Profile")}
                />
              </View>
            </KeyboardAvoidingView>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    position: "relative",
    backgroundColor: "rgba(109,123,129,0.3)",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  square: {
    display: "flex",
    position: "relative",
    padding: calcHeight(5),
    flex: 0.8,
    flexDirection: "column",
    // width: "100%",
    // height: "40%"
    backgroundColor: "#FFF",
    // backgroundColor: "rgba(255,184,56,0.8)",
    borderTopLeftRadius: calcHeight(8),
    borderTopRightRadius: calcHeight(8)
  },
  inputStyle: {
    textAlign: "left",
    height: calcWidth(10),
    borderRadius: calcWidth(2),
    borderWidth: calcWidth(1),
    borderColor: "#eee",
    marginTop: calcWidth(2),
    color: "#4F6075",
    fontFamily: "Quicksand-Bold",
    padding: calcWidth(3)
  },
  buttonActive: {
    borderWidth: 2,
    borderColor: "#4F6075",
    height: calcWidth(10),
    width: calcWidth(24),
    borderRadius: calcWidth(2)
  },
  buttonDisactive: {
    borderWidth: 0
  }
});
