import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Notifications extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.Text}> Commig Soon ... </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    marginTop: "100 %",
    justifyContent: "center",
    alignItems: "center"
  },
  Text: {
    color: "#ff4d94",
    fontSize: 30
  }
})