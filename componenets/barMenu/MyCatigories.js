import React, { Component } from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from './Footer';

export default class MyCatigories extends Component {
  state = {
    status: "",
    MyCatigoriesArray: [],
    flatArr: [],
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
    },
    colorCat: {
      Positive: "#ffbb99",
      Motivate: "#99ccff",
      Future: "#ff4d94",
      Work: "#80ff80",
      Technology: "#ccb3ff",
      Learning: "#FFC0CB",
      Family: "#9370DB",
      Food: "#66CDAA",
      Funny: "#FFDAB9",
      Power: "#ff8080"
    }
  }

  componentDidMount() {
    console.log('my catigory-------------------------')
    this.setState({ flatArr: Object.keys({ ...this.state.MyCatigories }).sort() })

    this.retrieveData()
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('MyCatigories');
      console.log(value)
      let MyCat = JSON.parse(value)

      if (value !== null) {
        console.log('value avalibale in my Catigory ', MyCat)
        this.setState({ MyCatigories: MyCat })
      } else {
        console.log('no data');
        this.storeData('MyCatigories', this.state.MyCatigories)
        this.storeData('MyCatigoriesArray', [])
      }

    } catch (error) {
      alert(error)
    }
  }

  saveInArray = (Cat) => {
    console.log('saveInArray');
    let newArray = [];
    for (const key in Cat) {
      if (Cat[key] === true) {
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
  }



  saveNewData = async () => {
    console.log('saveNewData')
    let arrayTest = []
    for (const key in this.state.MyCatigories) {
      if (this.state.MyCatigories[key] === true) { arrayTest.push(1) }
    }
    if (arrayTest[0]) {
      this.storeData('MyCatigories', this.state.MyCatigories)
      this.saveInArray(this.state.MyCatigories)

      this.props.navigation.navigate('Home', { check: this.state.MyCatigories });
    }
    else {
      this.setState({ status: "Please Select one at least" })
    }

  }



  valueChange = (item) => {
    console.log('valueChangeItem', item)
    let newMyCat = { ...this.state.MyCatigories }
    newMyCat[item] = !this.state.MyCatigories[item]
    console.log('valueChangeNEW', newMyCat)
    // this.setState({ MyCatigories: newMyCat })
  }

  render() {
    return (
      <View style={styles.screenWidth}>
        <Text style={styles.text}> Select you favourite Categories</Text>
        <View style={{ marginTop: 40 }}>
          <FlatList
            data={this.state.flatArr}
            extraData={this.state}
            renderItem={item => {
              return (
                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: '#d6d7da',
                      padding: 10,
                      marginBottom: 10,
                      marginHorizontal: 10,
                      backgroundColor: this.state.colorCat[item.item]
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <CheckBox
                        title={item.item}
                        value={this.state.MyCatigories[item.item]}
                        onValueChange={() =>
                          this.setState(pervState => ({
                            MyCatigories: {
                              ...this.state.MyCatigories,
                              [item.item]: !this.state.MyCatigories[item.item],
                            },
                          }))
                        }
                      />
                      <Text style={{ marginTop: 5 }}>{item.item}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text style={styles.text1}>{this.state.status}</Text>
          <View style={styles.button} >
            <Button title="Save" onPress={this.saveNewData} />
          </View>
        </View>
        <Footer navigation={this.props.navigation} footerBtn={{ CatigoriesBtn: "", HomeBtn: "", SettingsBtn: "#ff4d94" }} />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  screenWidth: {
    height: "100%"
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    color: "#ff4d94",
    fontWeight: "bold"
  },
  text1: {
    textAlign: "center",
    marginTop: 10,
    color: "red",
    fontWeight: "bold"
  },
  button: {
    marginTop: 20,
    marginHorizontal: 10,

  }
})






