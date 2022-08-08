import { View, Text, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { TouchableOpacity } from "react-native";
import { KeyboardAvoidingView, Keyboard } from "react-native";
const Form = (props) => {
  const [task, setTask] = useState("");

  const handleAddTasks = () => {
    if (task.length === 0) {
      alert("Ban vui long nhap cong viec");
      return false;
    }
    props.onAddTask(task);
    setTask("");
    Keyboard.dismiss()
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput
        value={task}
        placeholder="Your Task"
        style={styles.input}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTasks}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
