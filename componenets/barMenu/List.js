import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Slice from './Slice';
import axios from 'axios';
import { array } from 'prop-types';

export class list extends Component {
    state = {
        tips: []
    }

    UNSAFE_componentWillReceiveProps(next) {
        console.log('objectcwmnnnnnnnnn')
        this.componentDidMount()
        this.render()
    }
    componentDidMount = async () => {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('MyCatigoriesArray'))
            if (value !== null) {
                axios.post('https://server-positive-vibes.herokuapp.com/search', value)
                    .then(res => {
                        console.log('res.datares.datares.data---------------', res.data)
                        this.setState({ tips: res.data })
                        this.render()
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            } else {
                console.log('no data');
            }
        } catch (error) {
            alert(error)
        }
    }
    // readMycat = () => { }

    render() {

        return (
            <View style={styles.screenWidth}>
                <FlatList data={this.state.tips}
                    extraData={this.state}
                    // ref="flatList"
                    // onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
                    renderItem={item =>
                        (<Slice item={item.item}
                        />)
                    }
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        )
    }


}

export default list
const styles = StyleSheet.create({
    screenWidth: { height: "95%" }
})