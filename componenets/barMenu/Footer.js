import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native';

export default class Footer extends Component {
    render() {
        const { HomeBtn, CatigoriesBtn, SettingsBtn } = this.props.footerBtn
        return (
            <View style={styles.footer} >
                <View style={styles.button}>
                    <Button style={styles.button}
                        color={CatigoriesBtn}
                        title="Catigories"
                        onPress={() => {
                            this.props.navigation.navigate('Catigories');
                        }}
                    />
                </View>
                <View style={styles.buttonSelected}>
                    <Button
                        color={HomeBtn}
                        title="Home"
                        // disabled
                        onPress={() => {
                            this.props.navigation.navigate('Home');
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button}
                        color={SettingsBtn}
                        title="&#8226;	&#8226;	&#8226;	 "
                        onPress={() => {
                            this.props.navigation.navigate('Settings');
                        }}
                    />
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: "33.3%",
    },
    buttonSelected: {
        width: "33.3%",
        backgroundColor: "#ff4d94"
    },

    footer: {
        // backgroundColor: 'gold',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        width: "100%",
        // height: "5%",
        display: "flex",
        // flexWrap: "wrap",
        // textAlign: "center",
        // lineHeight: "100",
        // fontSize: "30px"
    }
})
