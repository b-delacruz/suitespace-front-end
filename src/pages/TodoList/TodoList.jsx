import { useState } from 'react';
import { PropaneSharp } from "@mui/icons-material";
import { Typography, Button, Modal, Box } from '@mui/material'
import TodoItem from "../../components/Todo/TodoItem";
import './TodoList.css';

const TodoList = () => {

  const [list, setList] = useState([])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 6,
    p: 4,
  }
  
  return (
    <div className='todo-list'>
      <div className='todo-list-header | flex justify-between'>
        <h1>Todos</h1>
        <div>searchbar</div>
        <div>grab button</div>
      </div>
      <div>
        <Button onClick={handleOpen}>Add Todo</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add a todo
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form action="" className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                  <label>Title</label>
                  <input className='input-item'
                    name="title"
                    type="text"
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Description</label>
                  <input className='input-item'
                    name="description"
                    type="text"
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Due Date</label>
                  <input className='input-item'
                    name="dueDate"
                    type="date"
                    required
                  />
                </div>
                <div className='btn-submit'>
                  <button
                    type='submit'
                  >
                    Add Todo
                  </button>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className='todo-list-showing | flex'>
        <div>Showing Tag</div>
      </div>
      <div className='todo-list-body'>
        <TodoItem
        // key={idx}
        // isList={true}
        // addTodo={}
        // removeFromList={}
        // updateTodo={}
        />
      </div>
    </div>
    );
  }
  
  export default TodoList;

  