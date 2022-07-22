import "./TodoList.css";
import "../../components/Todo/TodoAdd.jsx";
import * as todoService from "../../services/todoService";
import TodoItem from "../../components/Todo/TodoItem";
import TodoAdd from "../../components/Todo/TodoAdd.jsx";

import { useState, useEffect } from "react";
import { Modal, Box, Typography, Backdrop, Fade } from "@mui/material";


const TodoList = (props) => {
  const [todos, setTodos] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchAllTodos = async () => {
      const todoData = await todoService.getAll();
      setTodos(todoData);
    };
    fetchAllTodos();
  }, []);

  const handleAddTodo = async (newTodoData) => {
    const newTodo = await todoService.create(newTodoData);
    setTodos([...todos, newTodo]);
    handleClose();
  };

  const handleDeleteTodo = async (id) => {
    const deletedTodo = await todoService.deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== deletedTodo._id));
    handleClose();
  };

  const handleUpdateTodo = async (updatedTodoFormData) => {
    const updatedTodo = await todoService.update(updatedTodoFormData);
    const newTodosArray = todos.map((todo) =>
      todo._id === updatedTodo._id ? updatedTodo : todo
    );
    setTodos([...newTodosArray]);
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 6,
    p: 4,
  };

  return (
    <div className="todo-list | ">
      <div className="todo-list-header | text-lg flex">
        <h1>Todos</h1>
        {props.user ? (
          <button
            onClick={handleOpen}
            className="todo-add-event-button | flex justify-center items-center text-base rounded"
          >
            Add Todo
          </button>
        ) : (
          <div>Log in to add todos</div>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <span className="form-header">
                <span className="soft-yellow">Add Todo</span>
              </span>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              component={"span"}
            >
              <TodoAdd handleAddTodo={handleAddTodo} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <div className="todo-items-container | overflow-y-scroll flex flex-col gap-4">
        {props.user ? (
          <>
            {todos.map((todo, idx) => (
              <TodoItem
                key={idx}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
                style={style}
                user={props.user}
              />
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TodoList;
