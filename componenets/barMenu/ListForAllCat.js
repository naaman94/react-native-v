import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Slice from './Slice';
import axios from 'axios';
import Footer from './Footer';

export class list extends Component {
    state = {
        tips: []
    }
    componentDidMount() {
        let searchcat = [];
        if (this.props.navigation.getParam('catigories') === "All Catigories") {
            searchcat = ["Positive", "Motivate", "Future", "Work", "Technology", "Learning", "Family", "Food", "Funny", "Power"]
        } else {
            searchcat = [this.props.navigation.getParam('catigories')]
        }
        axios.post('https://server-positive-vibes.herokuapp.com/search', searchcat)
            .then(res => {
                this.setState({ tips: res.data })
                this.render()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (<>
            <View style={styles.screenWidth}>
                <FlatList data={this.state.tips}
                    renderItem={item =>
                        (<Slice item={item.item}
                        />)
                    }
                    keyExtractor={(item, index) => index.toString()} />
            </View>
            <Footer navigation={this.props.navigation}
                footerBtn={{ CatigoriesBtn: "#ff4d94", HomeBtn: "", SettingsBtn: "" }} />
        </>
        )
    }
}

export default list
const styles = StyleSheet.create({
    screenWidth: { height: "95%" }
})