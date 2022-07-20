import '../../pages/TodoList/TodoList.css'

const TodoItem = (props) => {
	return (
		<>
      <div className='todo-item'>
				<input type="checkbox" />
				<div className='todo-item-content'>
					<p>Title: {props.todo.title}</p>
					<p>Description: {props.todo.description}</p>
				</div>
				{props.user?.profile === props.todo.owner && 
					<div className=''>
						<button
							className='delete-todo-item'
							onClick={() => props.handleDeleteTodo(props.todo._id)}
						>
							X
						</button>
					</div>
				}
      </div>
    </>
	)
}

export default TodoItem
