import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import _ from "lodash";
import { AppLoading } from "expo";

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to Job Search App!", color: "#03A9F4" },
  { text: "Use this to search for your dream job.", color: "#009688" },
  { text: "Set your location, then swipe away!", color: "#EAA708" }
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    const token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("map");
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlideComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}

export default WelcomeScreen;
