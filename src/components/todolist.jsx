import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../slice/todoSlice";

function TodoList({ task, setTask }) {
  const [toDo, setToDo] = useState([]);
  const selector = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodos && storedTodos.length > 0) {
      setToDo(storedTodos);
    }
  }, []);

  useEffect(() => {
    setToDo(selector);
  }, [selector]);

  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id: id, task: task }));
    setTask("");
  };

  return (
    <div>
      <ul>
        {toDo.map((todo) => (
          <Box className="flex justify-center w-100 mt-2">
            <Box
              className="flex justify-around bg-slate-200 w-1/3 p-6"
              sx={{
                display: "flex",
                justifyItems: "center",
              }}
            >
              <div>{todo.task}</div>
              <Box>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    handleUpdate(todo.id);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleDel(todo.id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
