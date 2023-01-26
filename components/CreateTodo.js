import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function CreateTodo(props) {
  const { setTodoContainer, todoContainer, handleAddTodo } = props;
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.createTodoBox}
      >
        <TextInput
          placeholder="Write Here ..."
          value={todoContainer}
          style={styles.input}
          onChangeText={(text) => setTodoContainer(text)}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <View style={styles.btn}>
            <Text style={styles.addBtn}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createTodoBox: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    width: 250,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#9b59b6",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#9b59b6",
  },
  addBtn: {
    color: "#fff",
  },
});
