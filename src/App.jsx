import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

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
  const [open, setOpen] = useState(true)

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
      <NavBar user={user} handleLogout={handleLogout} />
      <SideBar open={open} handleSideBarOpen={handleSideBarOpen} handleSideBarClose={handleSideBarClose} />
      <div className='app-toggle-sidebar | fixed right-0 top-0 flex justify-center items-center group' onClick={open ? () => handleSideBarClose() : () => handleSideBarOpen()} style={open ? {display: 'none'} : {display: 'flex'}}>
        <ChevronLeft fontSize='large'/>
        <span className='sidebar-tooltip | group-hover:scale-100 scale-0'>Open Sidebar</span>
      </div>      
      <FavoriteBar />
      <NewsFeed />
      <Todolist user={user} />
      <Weather user={user} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
