import { Typography, Modal, Box } from '@mui/material'
import '../../pages/TodoList/TodoList.css'
import TodoEdit from '../../components/Todo/TodoEdit.jsx';

const TodoItem = (props) => {
	return (
		<>
			{props.user?.profile === props.todo.owner._id && 
      	<div className='todo-item' onClick={props.handleOpen}>
					<input type="checkbox" />
					<div className='todo-item-content'>
						<p>Title: {props.todo.title}</p>
						<p>Description: {props.todo.description}</p>
					</div>
					{console.log(props)}
      </div>
				}
				<Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={props.style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {props.todo.title}
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              <TodoEdit
                // PASS PROPS NECESSARY FOR DELETE AND EDIT
              />
            </Typography>
          </Box>
        </Modal>
		</>
	)
}

export default TodoItem


{/* <button
	className='delete-todo-item'
	onClick={() => props.handleDeleteTodo(props.todo._id)}
>
	Delete
</button> */}