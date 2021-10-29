import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Decks from "../views/Decks";
import AddDeck from "../views/AddDeck";
import { standout, secondaryLight } from "../styles/colors";

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks
    },
    AddDeck: {
      screen: AddDeck
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Decks") {
          iconName = `ios-bookmarks`;
        } else if (routeName === "AddDeck") {
          iconName = `ios-add`;
        }
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      }
    }),
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? "white" : "white",
      inactiveTintColor: secondaryLight,
      style: {
        height: 56,
        backgroundColor: standout,
        shadowColor: `rgba(0, 0, 0, 0.24)`,
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default Tabs;