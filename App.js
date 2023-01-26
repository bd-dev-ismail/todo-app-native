import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoContainer, setTodoContainer] = useState("");
  const handleAddTodo = () => {
    if (!todoContainer) {
      return;
    }
    Keyboard.dismiss();
    setTodos((prev) => [...prev, { id: prev.length + 1, text: todoContainer }]);
    setTodoContainer("");
  };
  const handleDeleteTodo = (id) => {
    const filterd = todos.filter((todo) => todo.id !== id);
    setTodos(filterd);
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainApp}>
        <Text style={styles.heading}>Manbal Ai Todo App</Text>
      </View>
      <View style={styles.todos}>
        {todos.length <= 0 ? (
          <Text style={styles.noTodo}>No Todos Available Yet.</Text>
        ) : (
          todos.map((todo, idx) => (
            <Todo
              key={idx}
              id={todo.id}
              text={todo.text}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))
        )}
      </View>
      <CreateTodo
        setTodoContainer={setTodoContainer}
        todoContainer={todoContainer}
        handleAddTodo={handleAddTodo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainApp: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
  },
  noTodo: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "18px",
  },
});
