import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function EditTodo(props) {
  const location = useLocation()

  const [formData, setFormData] = useState(location.state.todo)

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const [validForm, setValidForm] = useState(true)

  const formElement = useRef()

  const handleSubmit = evt => {
		evt.preventDefault()
    console.log(location)
    // props.handleUpdateTodo(formData)
	}

  return (
    <>
    {console.log(formData)}
    <h1>Edit</h1>
    <form autoComplete='off' className='flex flex-col gap-3' ref={formElement} onSubmit={handleSubmit}>
      <div className='flex flex-col'>
        <label htmlFor='name-input'>Due Date</label>
        <input className='input-item'
          name='dueDate'
          type='date'
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label>Title</label>
        <input className='input-item'
          name='title'
          type='text'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label>Description</label>
        <input className='input-item'
          name='description'
          type='text'
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className='btn-submit'>
        <button
          type='submit'
          disabled={!validForm}
        >
          Save
        </button>
      </div>
      <div>
        <Link
          to='/'
        >
          Cancel
        </Link>
      </div>
    </form>
    </>
  )
}

export default EditTodo