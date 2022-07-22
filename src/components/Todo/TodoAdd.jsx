import { useState, useEffect, useRef } from 'react';


const TodoAdd = (props) => {

  const formElement = useRef()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: new Date(Date.now()).toISOString().slice(0, 10),
  })
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])


  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddTodo(formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off' ref={formElement} className='flex flex-col gap-6 pt-4'>
        <div className="flex justify-between w-full gap-6">
          <div className='flex flex-col gap-2 w-2/4'>
            <label>
              Due Date <span>*</span>
            </label>
            <input
              className='input-item'
              name='dueDate'
              type='date'
              value={formData.dueDate}
              required
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2 w-2/4'>
            <label>Title</label>
            <input className='input-item'
              name='title'
              type='text'
              value={formData.title}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Description</label>
          <input className='input-item'
            name='description'
            type='text'
            value={formData.description}
            required
            onChange={handleChange}
          />
        </div>
        <div className='btn-submit'>
          <button
            type='submit'
            disabled={!validForm}
          >
            Add Todo
          </button>
        </div>
      </form>
    </>
  )
}

export default TodoAdd