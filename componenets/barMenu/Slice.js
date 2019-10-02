import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, } from 'react-native'

export class Slice extends Component {
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
    backgroundColor = (key) => {

    }

    render() {

        return (
            <View style={{
                ...styles.list, backgroundColor: this.state.MyCatigories[this.props.item.category]
            }}>
                <Text >{this.props.item.tip}</Text>
                <Text style={styles.backtext}>{this.props.item.category}</Text>
            </View>
        )
    }
}

export default Slice

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    list: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
        borderColor: "#ff4d94",
        borderWidth: 1,
        alignItems: 'center',
        // maxWidth: "90%",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 8,
        borderRadius: 10
    },
    screenWidth: {
        // height: "90%"
    },
    backtext: {
        fontSize: 15,
        color: "white",
        right: "2%",
        bottom: "4%",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        position: "absolute"
    }
})

