import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default class HelloScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            < View style={styles.screenWidth}>
                <View style={styles.view}>
                    <Text style={styles.text1} >Hello</Text>
                    <View style={{ alignItems: "center" }}>
                        {/* <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                ...styles.text2, fontSize: 40,
                            }} >Positive </Text>
                            <Text style={{
                                ...styles.text3, fontSize: 30, marginTop: 25,

                            }} >Vibes</Text>
                        </View> */}
                        <View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text2} >Positive </Text>
                                <Text style={styles.text3} >Vibes</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text2} >Positive </Text>
                                <Text style={styles.text3} >Mind</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text2} >Positive </Text>
                                <Text style={styles.text3} >Life</Text>
                            </View></View>
                    </View>
                </View>
                <View style={styles.button} >
                    <Button
                        title="Select Your Vibes Catigories"
                        onPress={() => {
                            navigation.navigate('MyCatigories');
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenWidth: {
        height: "100%"
    },
    text1: {
        textAlign: "center",
        fontSize: 120,
        color: "#ff4d94",
        fontWeight: "bold"
    },
    text2: {
        fontSize: 20,
        marginTop: 20,
        color: "#5f27cd",
        fontWeight: "bold"
    },
    text3: {
        paddingVertical: 7,
        fontSize: 15,
        marginTop: 20,
        color: "#ff4d94",
        fontWeight: "bold"
    },
    view: {
        marginTop: "50%"

    },
    button: {
        marginTop: 40,
        margin: "2%"
    }
})

