import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { standout, std } from "../styles/colors";

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.headerBar}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: standout,
    color: std,
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center"
  }
});

export default Header;