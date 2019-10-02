import React, { Component } from 'react'
import { Text, View, AsyncStorage, Button } from 'react-native'

export class App extends Component {

 state = {
   text: 'Jordan'
 }

 render() {
   return (
     <View>
       <Text> Welconme </Text>
       <Button onPress={this._storeData} title='store' />
       <Button onPress={this._retrieveData} title='Retrive' />
     </View>
   )
 }
 _storeData = async () => {
   try {
     await AsyncStorage.setItem('Settings', this.state.text);
     alert('Saved')
   } catch (error) {
     // Error saving data
   }
 };

 _retrieveData = async () => {
   try {
     const value = await AsyncStorage.getItem('Settings');
     if (value !== null) {
       // We have data!!
       alert(value)
       console.log(value);
     }
   } catch (error) {
     // Error retrieving data
     alert(error)
   }
 };



}

export default App