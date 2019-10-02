import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from './Footer';
import List from './List'
export default class Home extends Component {

  state = {
    MyCatigoriesArray: [],
    MyCatigories: {
      Positive: false,
      Motivate: false,
      Future: false,
      Work: false,
      Technology: false,
      Learning: false,
      Family: false,
      Food: false,
      Funny: false,
      Power: false
    }
  }
  UNSAFE_componentWillReceiveProps(next) {
    console.log('next', next)
    this.retrieveData()
    this.render()
  }
  componentDidMount() {
    console.log('my catigory--inHome-----------------------')
    this.retrieveData()


  }
  render1 = () => {
    this.render()
    console.log('functon rerender')
  }
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('MyCatigories');
      console.log(value)
      let MyCat = JSON.parse(value)

      if (value !== null) {
        console.log('value avalibale', MyCat)
        this.setState({ MyCatigories: MyCat })
      } else {
        console.log('no data');
        this.props.navigation.navigate('HelloScreen');
      }
    } catch (error) {
      alert(error)
    }
  };

  saveInArray = (Catigories) => {
    console.log('saveInArray');
    let newArray = [];
    for (const key in Catigories) {
      if (Catigories[key] === true) {
        newArray.push(key)
      }
    }
    this.storeData('MyCatigoriesArray', newArray)

  }

  storeData = async (store, value) => {
    console.log('storeData');
    try {
      console.log('try')
      await AsyncStorage.setItem(store, JSON.stringify(value))
    } catch (error) {
    }
  };

  render() {
    console.log('render from home')
    console.log('this.state.......', this.state.MyCatigories)
    return (<>
      <List navigation={this.props.navigation} />
      <Footer navigation={this.props.navigation}
        footerBtn={{ CatigoriesBtn: "", HomeBtn: "#ff4d94", SettingsBtn: "" }} />
    </>
    );
  }
}
