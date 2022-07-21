//* React Hooks *//
import { useState, useRef, useEffect } from 'react'

const AddFavoriteItem = ({ handleAddFavorite }) => {
  //* State *//
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    link: '',
  })

  //* useRef *//
  const formElement = useRef()

  //* useEffect *//
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  //* Functions *//
  const handleChange = evt => setFormData({ ...formData, [evt.target.name]: evt.target.value })

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddFavorite(formData)
  }

  return (
    <>
      <form ref={formElement} className="flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
        <div className="flex justify-between w-full gap-6">
          <div className="flex flex-col gap-2 w-2/4">
            <label htmlFor="category-input">
              Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-2/4">
            <label htmlFor="category-input">
              URL Link <span>*</span>
            </label>
            <input
              type="text"
              placeholder="URL Link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button onClick={() => handleSubmit()} disabled={!validForm}>
          SUBMIT
        </button>
      </form>
    </>
  )
}

export default AddFavoriteItem