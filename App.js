import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Button, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import SandBox from "./components/sandbox";


export default function App() {
    const [todos, setTodos] = useState([
        {text: "buy coffe1", key: '1'},
        {text: "buy coffe2", key: '2'},
        {text: "buy coffe3", key: '3'},
    ]);
    const PressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key);
        })
    }
    const SubmitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [{
                    text: text,
                    key: Math.random().toString()
                }, ...prevTodos]
            })
        } else {
            Alert.alert('OOPS!', 'todos should more than 3 characters', [
                {text: 'Understood', onPress: () => console.log("alert closed")}
            ])
        }
    }
    return (
        // <SandBox/>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log("keyboard dismiss");
        }}>
            <View style={styles.container}>
                <Header/>
                <View style={styles.content}>
                    <AddTodo pressBtn={SubmitHandler}/>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                                <TodoItem item={item} pressHandler={PressHandler}/>
                            )}
                        />
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 40,
        flex: 1,
    },
    list: {
        marginTop: 30,
        flex: 1,
    },
});
