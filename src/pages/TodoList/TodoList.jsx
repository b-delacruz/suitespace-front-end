import { useState, useRef, useEffect } from 'react';
import { PropaneSharp } from '@mui/icons-material';
import { Typography, Button, Modal, Box } from '@mui/material'
import TodoItem from '../../components/Todo/TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [formData, setformData] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
  })
  const [validForm, setValidForm] = useState(false)
  const handleChange = evt => {
    setformData({...formData, [evt.target.name]: evt.target.value })
  }
  const formElement = useRef()
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  const [todos, setTodos] = useState([])
  
  const handleSubmit = evt => {
    evt.preventDefault()
  }


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
        {/* <Button onClick={handleOpen}>Add Todo</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          formData={formData}
        >
          <Box sx={style} formData={formData}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Add Todo
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }} formData={formData}> */}
              <form onSubmit={handleSubmit} autoComplete='off' ref={formElement} className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                  <label>Title</label>
                  <input className='input-item'
                    name='title'
                    type='text'
                    value={formData.name}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Description</label>
                  <input className='input-item'
                    name='description'
                    type='text'
                    value={formData.description}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Due Date</label>
                  <input className='input-item'
                    name='dueDate'
                    type='date'
                    value={formData.dueDate}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className='btn-submit'>
                  <button
                    type='submit'
                    disabled={!validForm}
                    hidden={!validForm}
                  >
                    Add Todo
                  </button>
                </div>
              </form>
            {/* </Typography>
          </Box>
        </Modal> */}
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

  