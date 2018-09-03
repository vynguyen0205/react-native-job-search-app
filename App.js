import { Constants } from "expo";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import { Provider } from "react-redux";

import store from "./store";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: createBottomTabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
            review: {
              screen: createStackNavigator({
                review: { screen: ReviewScreen },
                settings: { screen: SettingsScreen }
              })
            }
          })
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        lazy: true
      }
    );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : undefined
  }
});
