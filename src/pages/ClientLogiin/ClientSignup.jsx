import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { isValidEmail, isValidPassword, showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import '../Login/Login.scss'
import { LAMT_API } from '../../api'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import LMTModal from '../../components/LMTModal/LMTModal';
import TopLogoImage from '../../assets/img/login-logo.png'
import './ClientLogin.scss'
import LMTLoader from '../../components/LMTLoader/LMTLoader';
const ClientSignup = () => {
 
  const navigate = useNavigate()

  const [email, setEmail] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [password, setPassword] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail({ value: newEmail, error: !isValidEmail(newEmail) });
  };
  const handlePasswordChange = (event) => {
    const newPass = event.target.value;
    setPassword({ value: newPass, error: !isValidPassword(newPass) });
  };
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email.error) {
      try {
        setLoading(true);
        let SignupResponse = await LAMT_API.endpoints.clientAdmin.Signup({ email: email.value, password: password.value });
        if (SignupResponse?.status==200) {
     
            console.log(SignupResponse?.data?.data?.token,"SignupResponse")
          localStorage.setItem("signupToken", SignupResponse?.data?.data?.token)
        //   showAlert.success(loginResponse?.data?.message);
        //   window.location.reload()
      
        navigate("/signup-type")
        }
        else if(SignupResponse?.response?.status==422){
          setLoading(false);
          console.log(SignupResponse,"12455")
          showAlert.failure("The email has already been taken")
        }

      } catch (err) {
        console.log(err,"1245")
      }
    }
  }
  const handleGoogle = async () => {
    
      try {
        setLoading(true);
        let result = await LAMT_API.endpoints.clientAdmin.withGoogleOpen();
        console.log("res", result)
        if (result?.status === 200) {
          setLoading(false)
        }
        else {
          setLoading(false)
          setOpen(false)
        
        }
      } catch (err) {
        console.log(err)
      }
    
  }
  const withGoogleTemplate = <>
    <TextField
      label='Email'
      value={email.value}
      onChange={handleEmailChange}
      required
      fullWidth
      error={email.error}
      helperText={!email.error ? '' : 'Invalid email format'}
    />
    <Button onClick={handleGoogle}>Submit</Button>
  </>

  return (
   <div className='login-main'>
    {loading && <LMTLoader />}
      <div className='login-container'>
        <Box className='login-inner'>
          <Box className="login-head">
            <img width={200} className='logo' src={TopLogoImage} />
            <Typography variant="subtitle1" gutterBottom> Signup to continue to LAMT</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Email'
              value={email.value}
              onChange={handleEmailChange}
              required
              fullWidth
              error={email.error}
              helperText={!email.error ? '' : 'Invalid email format'} />
            <TextField
              fullWidth
              required
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }}
              onChange={handlePasswordChange}
              label="Password"
              error={password.error}
              helperText={!password.error ? '' : 'Password must be 8 characters, with 1 capital letter, 1 number, and 1 special character'} />
            <LPTButton content="Continue" type={"submit"} className='btn-login-submit' />
          </form>
          <Box className='first-login'>
            <Typography variant="subtitle1" gutterBottom> Already have an account? </Typography>
            <Link to={'/login'} underline="none" className='singup-sign'>
              Login
            </Link>
          </Box>
          <Typography variant="subtitle1" gutterBottom className='option-or'> OR</Typography>
          <Button variant='outlined' onClick={() => handleGoogle()} className='btn-login-with-google'> Login with Google</Button>

        </Box>
      </div>
      <LMTModal
        open={open}
        handleClose={() => setOpen(e => !e)}
        children={withGoogleTemplate}
        loading={loading} />
    </div>
  )
}

export default ClientSignup