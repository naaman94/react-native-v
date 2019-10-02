import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CatSlice from './CatSlice';
import Footer from './Footer';

export default class Catigories extends Component {
  state = {
    categories: ["Family", "Food", "Funny", "Future", "Learning", "Motivate", "Positive", "Power", "Technology", "Work"]
  }

  render() {
    const { categories } = this.state
    return (<>
      <View >

        <TouchableOpacity style={styles.toush}
          onPress={() => this.props.navigation.navigate('ListForAllCat', { catigories: "All Catigories" })}>
          <Text style={styles.list}>All Catigories</Text>
        </TouchableOpacity>

        <FlatList
          numColumns={2}
          data={categories}
          contentContainerStyle={{
            alignSelf: 'flex-start',
          }}
          renderItem={item => <CatSlice navigation={this.props.navigation} item={item.item}
          />}
          keyExtractor={(item, index) => index.toString()} />
        {/* <Text> data: {JSON.stringify(navigation.getParam('data'))}</Text> */}
      </View>
      <Footer navigation={this.props.navigation}
        footerBtn={{ CatigoriesBtn: "#ff4d94", HomeBtn: "", SettingsBtn: "" }} />
    </>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    // flexBasis: '39%',
    flexGrow: 0,
    padding: 40,
    borderColor: '#FFFF66',
    borderWidth: 3,
    // width: "100%",
    // flex: 1,
    backgroundColor: '#87CEEB',
    borderRadius: 10,
    // fontSize: ,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toush: {
    // width: "96%",
    margin: "2%",
    // flex: 1,
  }
});
