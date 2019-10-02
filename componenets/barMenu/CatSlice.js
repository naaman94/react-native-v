import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export class CatSlice extends Component {
  state = {
    MyCatigories: {
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
  onPressCatg = () => {
    this.props.navigation.navigate('ListForAllCat', { catigories: this.props.item });
  }
  render() {

    return (
      <TouchableOpacity style={styles.toush}
        onPress={this.onPressCatg}
      >
        <Text style={{ ...styles.list, backgroundColor: this.state.MyCatigories[this.props.item] }}>{this.props.item}</Text>
      </TouchableOpacity>


    );
  }
}

export default CatSlice;

const styles = StyleSheet.create({
  list: {
    flexBasis: '39%',
    flexGrow: 0,
    padding: 40,
    borderColor: '#FFFF66',
    borderWidth: 3,
    // width: "100%",
    // flex: 1,
    borderRadius: 10,
    // fontSize: ,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toush: {
    width: "46%",
    margin: "2%",
    // flex: 1,
  }
});




// import {Button} from 'react-native-elements';

// export class CatSlice extends Component {
//   onPressCatg = () => {
//     let searchcat = []
//     if (this.props.item === "All Catigories") {
//       searchcat = ["Positive", "Motivate", "Future", "Work", "Technology", "Learning", "Family", "Food", "Funny", "Power"]
//     } else {
//       searchcat
//     }
//     axios.post('https://server-positive-vibes.herokuapp.com/search', [this.props.item])
//       .then(res => {
//         this.props.navigation.navigate('list', { catigories: res.data });
//         console.log('res.data', res.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }
//   render() {

//     return (
//       <TouchableOpacity
//         onPress={
//           this.onPressCatg
//           // this.props.navigation.navigate('Settings')
//           // this.props.navigation.navigate('list', { catigories: this.props.item });
//         }
//       >
//         <Text style={styles.list}>{this.props.item}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

// export default CatSlice;


// const styles = StyleSheet.create({

//   list: {
//     marginHorizontal: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     marginVertical: 10,
//     borderColor: "#ff4d94",
//     borderWidth: 1,
//     alignItems: 'center',
//     // maxWidth: "90%",
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     shadowOpacity: 0.25,
//     elevation: 8,
//     borderRadius: 10
//   },
//   screenWidth: {
//     // height: "90%"
//   }
// })