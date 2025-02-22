// React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

// Services
import * as authService from './services/authService'
import * as weatherService from './services/weatherService'
import * as locationService from './services/locationService'

// Files 
import './App.css'

// Main Pages
import FavoriteBar from './pages/FavoriteBar/FavoriteBar'
import Todolist from './pages/TodoList/TodoList'
import SideBar from './components/SideBar/SideBar'
import NewsFeed from './pages/NewsFeed/NewsFeed'
import Weather from './pages/Weather/Weather'

// Packages 
import { ChevronLeft } from '@mui/icons-material';

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [open, setOpen] = useState(true)


  const getLocationDetails = async () => {
    if (user) {
      try {
        locationService.getLocation()
          .then(location => {
            weatherService.getWeatherDetails(location)
              .then(details => {
                setWeather(details)
              })
          })
      } catch (error) {
        console.log(error)
      }
    } else {
      return "boston"
    }
  }

  const [weather, setWeather] = useState({})
  const [searchLocation, setSearchLocation] = useState(getLocationDetails)


  useEffect(() => {
    const fetchWeatherDetails = async () => {
      const weatherDetails = await weatherService.getWeatherDetails(searchLocation)
      setWeather(weatherDetails)
    }

    fetchWeatherDetails()
  }, [searchLocation])

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
    setSearchLocation(getLocationDetails)
  }

  function handleSideBarClose() {
    setOpen(false)
  }

  function handleSideBarOpen() {
    setOpen(true)
  }


  return (
    <>
      <NavBar
        user={user}
        handleSignupOrLogin={handleSignupOrLogin}
        handleLogout={handleLogout}
      />
      <SideBar
        open={open}
        handleSideBarOpen={handleSideBarOpen}
        handleSideBarClose={handleSideBarClose}
        user={user}
      />
      <div
        className='app-toggle-sidebar | fixed right-0 top-0 flex justify-center items-center group'
        onClick={open ? () => handleSideBarClose() : () => handleSideBarOpen()}
        style={open ? { display: 'none' } : { display: 'flex' }}
      >
        <ChevronLeft fontSize='large' />
        <span className='sidebar-tooltip | group-hover:scale-100 scale-0'>Open Sidebar</span>
      </div>

      <main className='app-layout-container | flex flex-wrap justify-between'>
        {(user) ?
          <section className='w-full flex gap-14'>
            <FavoriteBar
              user={user}
            />
          </section>
          :
          ""
        }
        <section className='w-full flex gap-14'>
          <NewsFeed />
          <Todolist user={user} />
        </section>
        <section>
          <Weather
            user={user}
            weather={weather}
            setWeather={setWeather}
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
        </section>
      </main>
    </>
  )
}

export default App
