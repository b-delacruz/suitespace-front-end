import { Link } from 'react-router-dom'
import '../../pages/TodoList/TodoList.css'

const TodoItem = (props) => {
	return (
		<>
		{console.log(props.state)}
      <div className='todo-item'>
				<input type="checkbox" />
				<div className='todo-item-content'>
					<p>Title: {props.todo.title}</p>
					<p>Description: {props.todo.description}</p>
				</div>
				{props.user?.profile === props.todo.owner._id && 
					<div className='flex flex-col'>
						<Link
							to="/edit"
							state={props.state}
          	>
            	Edit
          	</Link>
						<button
							className='delete-todo-item'
							onClick={() => props.handleDeleteTodo(props.todo._id)}
						>
							Delete
						</button>
					</div>
				}
      </div>
    </>
	)
}

export default TodoItem