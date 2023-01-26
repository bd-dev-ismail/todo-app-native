import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Todo(props) {
  const { text, id, handleDeleteTodo } = props;
  return (
    <View style={styles.todo}>
      <View style={styles.todoNumber}>
        <View style={styles.order}>
          <Text style={styles.textColor}>#{id}</Text>
        </View>
        <Text style={styles.mainText}>{text}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDeleteTodo(id)} style={styles.btn}>
        <Text style={styles.btnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  todo: {
    backgroundColor: "#f7f7f7",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  todoNumber: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  order: {
    width: 25,
    height: 25,
    backgroundColor: "#9b59b6",
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    maxHeight: "80%",
  },
  textColor: {
    color: "#fff",
  },
  btnText: {
    color: "#fff",
  },
  btn: {
    backgroundColor: "#9b59b6",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
