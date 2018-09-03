import React, { Component } from "react";
import { View } from "react-native";
import { MapView } from "expo";
import { connect } from "react-redux";

import * as actions from "../actions";
import { Button } from "react-native-elements";

class MapScreen extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  onRegionChangeComplete = region => {
    console.log(region);
    this.setState({ region });
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate("deck");
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            backgroundColor="#009688"
            icon={{ name: "search" }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(MapScreen);

const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0
  }
};
