import { Link } from 'react-router-dom'
import './navbar.css'
import Signup from '../../pages/Signup/Signup'
import Login from '../../pages/Login/Login'
import ChangePassword from '../../pages/ChangePassword/ChangePassword'

import { Button } from '@mui/material'

const NavBar = ({ user, handleLogout, handleSignupOrLogin }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Button variant="outlined" onClick={handleLogout}>
              Log Out
            </Button></li>
            <li><ChangePassword handleSignupOrLogin={handleSignupOrLogin} /></li>
          </ul>
        </nav>
        :
        <nav>
          <ul>
            <li><Login handleSignupOrLogin={handleSignupOrLogin} /></li>
            <li><Signup handleSignupOrLogin={handleSignupOrLogin} /></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
