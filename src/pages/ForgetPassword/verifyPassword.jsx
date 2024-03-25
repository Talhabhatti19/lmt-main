import React, { useState,useRef } from 'react'
import {
  Typography,
  Box,
  TextField,
} from '@mui/material'
import { isValidEmail, showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './ForgetPassword.scss'
import { LAMT_API } from '../../api'
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import LMTLoader from '../../components/LMTLoader/LMTLoader';
import TopLogoImage from '../../assets/img/login-logo.png'

const VerifyPassword = () => {
  const navigate = useNavigate()
  const email=useParams()
  const myObject = email;
  const emailValue = myObject.email;
  console.log(emailValue,"1234")
  const [loading, setLoading] = useState(false)
  const [otpValues, setOtpValues] = useState(['', '', '', '', '','']);
  const inputRefs = useRef(Array.from({ length: 6 }, () => React.createRef()));
  const concatenatedString = otpValues.join('');
  console.log(concatenatedString,"otpValues")
  const handleOtpChange = (index, value) => {
      if (isNaN(value)) {
        return;
      }
  
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
  
      if (value !== '' && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].current.focus();
      }
    };
  async function handleSubmit(event) {
    setLoading(true)
    try {
        let forgetPassword = await LAMT_API.endpoints.superAdmin.twoFactor({"code":concatenatedString,"email":emailValue });
        console.log("forgetPassword", forgetPassword)
        if (forgetPassword.status === 200) {  
            navigate(`/reset-password/${emailValue}`)
        } else {
          showAlert.failure(forgetPassword?.response?.data?.message)
        }

    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <div className='forget-main'>
      {loading ? <LMTLoader /> : <div className='forget-container'>
        <Box className='forget-inner'>
          <Box className="forget-head">
            <img width={200} className='logo' src={TopLogoImage} alt='logo'/>
            <Typography variant="h6" gutterBottom> Please enter the code </Typography>
           
          </Box>
          <form onSubmit={handleSubmit}>
          <div style={{display:"flex",justifyContent:"center",gap:"14px"}}>
          {otpValues.map((value, index) => (
            <input
              key={index}
              style={{height:"50px",width:"50px"}}
              className="customInput rounded-xl text-center"
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              ref={inputRefs.current[index]}
              maxLength={1}
            />
          ))}
        </div>
            <LPTButton disabled={loading} content="Submit" type={"submit"} />
          </form>
          <Box className='first-login back-to-login'>
            <Link to={'/login'} underline="none" className='btn-btl'>
              Back to Login
            </Link>
          </Box>
        </Box>
      </div>}
    </div>
  )
}

export default VerifyPassword