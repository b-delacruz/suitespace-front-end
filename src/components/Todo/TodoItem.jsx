import '../../pages/TodoList/TodoList.css'

const TodoItem = (props) => {
	// console.log(props)
	return (
		<div className="todo-item-container | flex justify-between">
			<div>Checkbox</div>
			<div>
				<div>Header</div>
				<div>Content</div>
			</div>
			<div>X</div>
		</div>
	)
}

export default TodoItem





    // <li style={{background: props.ingredient.color }}>
		// 	{props.ingredient.name}
		// 	{props.isList
		// 	(?) <button onClick={() => props.addToList(props.ingredient)}>+</button>
		// 	: <button onClick={() => props.removeFromList(props.idx)}>X</button>
		// }
		// </li>