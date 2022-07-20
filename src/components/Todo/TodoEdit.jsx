import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from 'react';


function EditTodo(props) {

  const [validForm, setValidForm] = useState(false)
  const handleChange = evt => {
    props.setFormData({...props.formData, [evt.target.name]: evt.target.value })
  }
  const formElement = useRef()
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [props.formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddTodo(props.formData)
  }

  return (
    <>
      <form autoComplete='off' className='flex flex-col gap-3' ref={formElement} onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor='name-input'>Due Date</label>
          <input className='input-item'
            name='dueDate'
            type='date'
            value={props.formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label>Title</label>
          <input className='input-item'
            name='title'
            type='text'
            value={props.formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label>Description</label>
          <input className='input-item'
            name='description'
            type='text'
            value={props.formData.description}
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