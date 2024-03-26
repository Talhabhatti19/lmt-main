import React from 'react'

//src
import './Signup.scss'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CompanyIcon from '../../assets/img/company-register.png'
import SoleTrading from '../../assets/img/soleTrading.png'
import TopLogoImage from '../../assets/img/login-logo.png'
import BackArrow from '../../assets/img/backArrow.png'

const RegisterType = () => {
  return (
    <>
    <div className='main-registration-inner' style={{background:"white", height:"100vh"}}>
      <div className="top-logo-rtyp" style={{boxShadow:"0px 0px 14px 0px rgba(107, 119, 229, 0.08)", padding:"15px 30px"}}>
      <img width={200} className='logo' src={TopLogoImage} />
      </div>
      <Link to="/login" style={{display:"flex", alignItems:"center", gap:"10px", fontWeight:"bold", color:"black", padding:"30px 300px"}}>
        <img src={BackArrow} alt='back-arrow'style={{width:"2%"}}/>Back</Link>
    <Typography variant='subtitle1' style={{textAlign:"center", paddingTop:"2%", fontSize:"24px", fontWeight:"bold"}}> What'S Your Business <br/>Structure?</Typography>
    <div className='register-type-main' style={{height:"unset", padding:"3% 0%"}}>
   
      <div className='register-type-container' style={{boxShadow:"none", flexDirection:"row-reverse", textAlign:"center", gap:"150px"}}>
        
       
        <div className='register-option' style={{border:"none"}}>
          <Link to={'/signup/frelance/detail'}> <div className='company-login'>
            <img src={SoleTrading} alt="" />
            <p style={{fontSize:"20px", fontWeight:"bold", color:"black"}}>Sole Trader</p>
            <p style={{fontSize:"14px", color:"#37393F"}}>I am self employed or a freelancer</p>
          </div> </Link>
        
        </div>

        <div className='register-option' style={{border:"none"}}>
          <Link to={'/signup/search'}>
          <div className='company-login'>
            <img src={CompanyIcon} alt="" />
            <p style={{fontSize:"20px", fontWeight:"bold", color:"black"}}>Limited Company/LTD</p>
            <p style={{fontSize:"14px", color:"#37393F"}}>I am registered with Companies House</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default RegisterType
