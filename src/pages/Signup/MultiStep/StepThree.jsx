import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeadBox from '../../../components/HeadBox/HeadBox'
import LMTForm from '../../../components/LMTForm/LMTForm'
import { StepThreeFields, StepThreeInitials, stepThreeValidation } from './data'
import { useNavigate } from 'react-router-dom'
import { useFormData } from '../../../ContextAPI/FormDataContext'
import { Link } from 'react-router-dom'
import BackArrow from '../../../assets/img/backArrow.png'
import TopLogoImage from '../../../assets/img/login-logo.png'
import {showAlert}  from "../../../../src/utils"
import "react-toastify/dist/ReactToastify.css";
const StepThree = () => {
  const navigate = useNavigate()
  const { formData, setFormData } = useFormData()
  const [phone,setPhone]=useState()
  const onSubmit = (values) => {
    setFormData({ ...formData, ...values });
    navigate('/signup/4')
  }
  const handleSubmit = () => {
    if (phone) {
      localStorage.setItem('phone_number', phone);
      navigate("/signup/vad/register")
    }
    else {
      showAlert.failure("Phone number is required.")     

    }
  };
  return (
    // <div className='register-main'>
    //   <div className='register-container'>
    //     <Box className='register-inner'>
    //       <HeadBox title={"Admin Registration"} />
    //       <LMTForm
    //         initialValues={StepThreeInitials}
    //         validationSchema={stepThreeValidation}
    //         formFields={StepThreeFields}
    //         onSubmit={onSubmit}
    //       />
    //     </Box>
    //   </div>
    // </div>
    <div className='register-main' style={{backgroundColor:"white", height:"100vh", padding:"0px"}}>
        <div className="top-logo-rtyp" style={{boxShadow:"0px 0px 14px 0px rgba(107, 119, 229, 0.08)", padding:"15px 30px"}}>
      <img width={200} className='logo' src={TopLogoImage} />
      </div>
    <div className='register-container' style={{boxShadow:"none", background:"transparent"}}>
      <Link to="/signup/directors" style={{display:"flex", alignItems:"center", gap:"10px", fontWeight:"bold", color:"black"}}>
        <img src={BackArrow} alt='back-arrow'style={{width:"2%"}}/>Back</Link>
      <p style={{textAlign:"center", fontSize:"20px", fontWeight:"bold", borderBottom:"0.5px solid #E8E8E8", paddingBottom:"10px"}}>Enter your mobile number</p>
      <p style={{color:"#37393F", fontSize:"14px", textAlign:"center"}}>We might reach out to make sure you don't miss any tax obligations.</p>
      <Box className='register-inner' style={{alignItems:"center"}}>
        <HeadBox />
        {/* <LMTForm
          initialValues={StepOneInitials}
          validationSchema={stepOneValidation}
          formFields={StepOneFields}
          onSubmit={onSubmit}
        /> */}
      <div style={{display:"flex"}}>
      <div className="innerphone" style={{border:"1px solid #DEE3FC", borderRadius:"100px"}}>
      <select style={{width:"68px", borderRadius:"100px", padding:"10px", border:"none", outline:"none"}}>
          <option>+44</option>
          <option>+92</option>
          <option>+91</option>
        </select>
        <input type="number" value={phone} onChange={(event)=>{setPhone(event.target.value)}} style={{border:"none", outline:"none"}}/>
      </div>
        <button onClick={()=>{handleSubmit()}} style={{backgroundColor:"#635DFE", color:"white", fontSize:"14px", fontWeight:"600", border:"none", padding:"10px 30px", borderRadius:"100px", marginLeft:"10px", cursor:"pointer"}}>Continue</button>
      </div>
      </Box>
    </div>
  </div>
  )
}

export default StepThree
