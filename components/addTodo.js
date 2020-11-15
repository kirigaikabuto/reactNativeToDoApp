import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Button} from "react-native";

export default function AddTodo({pressBtn}) {
    const [text, setText] = useState('');
    const changeHandler = (value) => {
        setText(value);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => {
                    pressBtn(text)
                }}
                title='add todo'
                style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    button: {
        color: 'coral',
    }
})
