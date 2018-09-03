import React, { Component } from "react";
import { View, Text } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to Job App!", color: "#03A9F4" },
  { text: "Use this to search for your dream job.", color: "#009688" },
  { text: "Set your location, then swipe away!", color: "#03A9F4" }
];

class WelcomeScreen extends Component {
  onSlideComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}

export default WelcomeScreen;
