import { useState } from 'react'
import './weather.css'

const WeatherSearchForm = (props) => {

  const [formData, setFormData] = useState({ query: '' })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    // props.handleLocationSearch(formData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input className='weather-input-item'
            name="query"
            type="text"
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default WeatherSearchForm;