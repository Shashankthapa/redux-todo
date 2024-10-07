import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slice/todoSlice";

function TodoForm({ task, setTask }) {
  const dispatch = useDispatch();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const taskSubmit = task.trim();
    console.log(taskSubmit);
    if (taskSubmit) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleTodoSubmit}
      className="p-10"
      sx={{ width: "100%", mb: 2 }}
    >
      <Typography variant="h6" className="text-red-600">
        Note : If you want to update pl type the value first in the text box and then hit the update button in front of the given record.
      </Typography>
      <FormControl fullWidth>
        <TextField
          id="outlined-multiline-flexible"
          label="Add your task"
          multiline
          maxRows={4}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{ paddingBottom: "10px" }}
        />
      </FormControl>
      <Button type="submit" variant="contained" disabled={!task}>
        Submit
      </Button>
    </Box>
  );
}

export default TodoForm;
