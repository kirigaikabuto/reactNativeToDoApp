import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>Box One</Text>
            <Text style={styles.boxTwo}>Box Two</Text>
            <Text style={styles.boxThree}>Box Three</Text>
            <Text style={styles.boxFour}>Box Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#333',
    },
    boxOne: {
        flex: 2,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
    },
})
