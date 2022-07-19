import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function EditTodo(props) {
  const location = useLocation()

  const [formData, setFormData] = useState(location.state.todo)

  return (
    <>
    {console.log(formData)}
    <h1>Edit</h1>
    <form autoComplete='off' className='flex flex-col gap-3'>
      <div className='flex flex-col'>
        <label htmlFor='name-input'>Due Date</label>
        <input className='input-item'
          name='dueDate'
          type='date'
          // value={formData.dueDate}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label>Title</label>
        <input className='input-item'
          name='title'
          type='text'
          // value={formData.title}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label>Description</label>
        <input className='input-item'
          name='description'
          type='text'
          // value={formData.description}
          required
        />
      </div>
      <div className='btn-submit'>
        <button
          type='submit'
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