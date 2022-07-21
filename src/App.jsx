import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

// Services
import * as authService from './services/authService'
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
  // const [location, setLocation] = useState(locationService.getLocation())
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
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
        handleSideBarOpen={handleSideBarOpen}
        handleSideBarClose={handleSideBarClose}
        open={open} 
      />
      <SideBar
        open={open}
        handleSideBarOpen={handleSideBarOpen}
        handleSideBarClose={handleSideBarClose}
        user={user} 
      />
      <FavoriteBar />
      {/* <main className='app-layout-container | flex flex-wrap justify-between'>
        <section className='w-full flex gap-14'>
          <NewsFeed />
        </section>
        <section>
          <Todolist user={user} />
        </section>
        {/* <section>
          <Weather user={user} />
        </section> 
      </main> */}
    </>
  )
}

export default App
