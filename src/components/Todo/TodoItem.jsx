import { Modal, Box, Typography, Backdrop, Fade } from "@mui/material";
import "../../pages/TodoList/TodoList.css";
import TodoEdit from "../../components/Todo/TodoEdit.jsx";
import { useState } from "react";

const TodoItem = (props) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked)
  };
  const handleOpen = () => {
    setOpen(true);
    handleCheck();
  };

  const handleClose = () => {
    setOpen(false);
    handleCheck()
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,

    border: "2px solid #000",
    boxShadow: 6,
    p: 4,
  };

  return (
    <>
      <div className="todo-item | flex w-full justify-start items-center gap-6">
        <div className="outer-box" onClick={handleOpen}>
          <div className="inner-box" style={checked ? {background: '#F2D3AB'} : {background: 'none'}}></div>
        </div>

        <div className="vertical-line"></div>
        <div className="todo-item-description">
          <h2 className="todo-item-category | text-sm">{props.todo.title}</h2>
          <h1 className="todo-item-event-name | text-base">
            {props.todo.description}
          </h1>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <span style={{color: 'white'}}>
                Edit: {props.todo.title}
              </span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TodoEdit
                todo={props.todo}
                formData={props.formData}
                setFormData={props.setFormData}
                handleUpdateTodo={props.handleUpdateTodo}
                handleDeleteTodo={props.handleDeleteTodo}
              />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default TodoItem;
