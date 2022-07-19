import '../../pages/TodoList/TodoList.css'

const TodoItem = (props) => {
	return (
		<>
      <h1>Todo List</h1>
      <div className='todo-item'>
          <div>
            <p>title</p>
            <p>description</p>
          </div>
      </div>
    </>
	)
}

export default TodoItem
