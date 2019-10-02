import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';
import MyCatigories from './MyCatigories';
import Notifications from './Notifications';
import Footer from './Footer';

export default class Settings extends Component {
  render() {
    const { navigation } = this.props;
    console.log('this.props.na', navigation)
    return (<>
      <View>
        <View style={{ justifyContent: "center", alignContent: "center" }}>
          <Image
            style={{ marginHorizontal: "17%", width: "66%", height: "66%" }}
            source={require('./image/positiveVibes.jpg')}
          />
        </View>

        <View style={{ margin: "2%" }}>
          <Button
            title="My Catigories"
            onPress={() => {
              navigation.navigate('MyCatigories');
            }}
          />
        </View>
        <View style={{ margin: "2%" }}>
          <Button
            title="Account"
            onPress={() => {
              navigation.navigate('Notifications');
            }}
          />
        </View>
      </View>

      <Footer navigation={this.props.navigation}
        footerBtn={{ CatigoriesBtn: "", HomeBtn: "", SettingsBtn: "#ff4d94" }}
      />
    </>
    );
  }
}
