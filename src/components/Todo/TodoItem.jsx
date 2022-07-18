import '../../pages/TodoList/TodoList.css'

const TodoItem = (props) => {
	return (
		<>
			<div className="todo-item-container | flex justify-between">
				{props.todos.map(todo =>
					<>
						<input type="checkbox" />
						<div>
							<h3>Header</h3>
							<h3>Content</h3>
						</div>
						<button>X</button>
					</>
					)}
			</div>
		</>
	)
}

export default TodoItem
