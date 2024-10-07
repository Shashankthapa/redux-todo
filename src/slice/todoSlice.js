import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState;
const todoData = localStorage.getItem("todoList");
if (todoData) {
  initialState = {
    todo: JSON.parse(todoData),
  };
} else {
  initialState = {
    todo: [],
  };
}

export const todoListSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoAdd = {
        id: nanoid(),
        task: action.payload,
      };
      state.todo.push(todoAdd);
      localStorage.setItem("todoList", JSON.stringify(state.todo));
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todoList", JSON.stringify(state.todo));
    },
    updateTodo: (state, action) => {
      const updateTodo = state.todo.find(
        (todo) => todo.id == action.payload.id
      );
      if (updateTodo && action.payload.task !== "") updateTodo.task = action.payload.task;
      localStorage.setItem("todoList", JSON.stringify(state.todo))
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
