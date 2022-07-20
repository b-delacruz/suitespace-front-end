import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material'

const Signup = props => {

  //Sign Up
  const navigate = useNavigate()
  const [message, setMessage] = useState([''])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  // MUI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      passwordConf: '',
    })
    setOpen(false);
  }

  const updateMessage = msg => {
    setMessage(msg)
  }

  const { name, email, password, passwordConf } = formData

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }

  const handleChange = e => {
    updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <div>
      <button className='nav-button | flex justify-center items-center text-base rounded px-5 py-1' onClick={handleOpen}>
        Sign Up
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContentText>
          {message}
        </DialogContentText>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="standard-required"
            label="Name"
            helperText="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="standard-required"
            label="Email"
            helperText="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="standard-password-input"
            label="Password"
            helperText="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="standard-password-input"
            label="Confirm Password"
            helperText="Confirm Password"
            type="password"
            name="passwordConf"
            value={passwordConf}
            onChange={handleChange}
            autoComplete="off"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={isFormInvalid()} onClick={handleSubmit}>Sign Up</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Signup
