import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert
} from "react-native";
import Task from './components/Task'
import styles from "./App.components.style";
import Form from './components/Form'
import { useState } from "react";
export default function App() {
  const [taskList, setTaskLict ] = useState([])
  const handleAddTasks = (task) => {
    // add tasks
    setTaskLict([...taskList, task])
  }
  const handleDeleteTasks = (index) => {
    Alert.alert(
      "Thông Báo !!!",
      "Bạn có chắc chắn muốn xóa?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList]
            taskListTmp.splice(index, 1)
            setTaskLict(taskListTmp)
          } ,
        },
        { text: "Cancel", onPress: () => {}}
      ]
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style = {styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key = {index} title = {item} number = {index + 1} onDeleteTask = {() => handleDeleteTasks(index)}/>
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask = {handleAddTasks} />
    </View>
  );
}

