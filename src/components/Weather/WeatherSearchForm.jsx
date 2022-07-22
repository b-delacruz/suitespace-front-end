import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './weather.css'

const WeatherSearchForm = (props) => {

  const [formData, setFormData] = useState({ query: '' })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleSearchLocation(formData)
    setFormData({ query: '' })
    
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='flex items-center gap-1'>
          <input className='weather-input-item'
            name="query"
            type="text"
            placeholder="Search Location"
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
          />
          <button type="submit"><SearchIcon/></button>
        </form>
      </div>
    </>
  );
}

export default WeatherSearchForm;