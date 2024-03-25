import { Box } from '@mui/material'
import React,{useState} from 'react'
import HeadBox from '../../../components/HeadBox/HeadBox'
import LMTForm from '../../../components/LMTForm/LMTForm'
import { StepFourFields, StepFourInitials, stepFourValidation } from './data'
import { useNavigate } from 'react-router-dom'
import { useFormData } from '../../../ContextAPI/FormDataContext'
import { Link } from 'react-router-dom'
import BackArrow from '../../../assets/img/backArrow.png'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TopLogoImage from '../../../assets/img/login-logo.png'

const StepNine = () => {
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = useState("");
  // const { formData, setFormData } = useFormData()
  // const onSubmit = (values) => {
  //   setFormData({ ...formData, ...values });
  //   console.log(formData)
  //   alert("Your Data Submitted Successfully")
  //   navigate('/login')
  // }
  const onSumbit = () => {
    alert("Your Data Submitted Successfully")
    navigate('/login')
  }
  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem("freelancer_assessment", value);
  };
  return (
    // <div className='register-main'>
    //   <div className='register-container'>
    //     <Box className='register-inner'>
    //       <HeadBox title={"Admin Registration"} />
    //       <LMTForm
    //         initialValues={StepFourInitials}
    //         validationSchema={stepFourValidation}
    //         formFields={StepFourFields}
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
      <Link to="/signup/freelancer/date" style={{display:"flex", alignItems:"center", gap:"10px", fontWeight:"bold", color:"black"}}>
        <img src={BackArrow} alt='back-arrow'style={{width:"2%"}}/>Back</Link>
      <p style={{textAlign:"center", fontSize:"20px", fontWeight:"bold", borderBottom:"0.5px solid #E8E8E8", paddingBottom:"10px"}}>ARE YOU REGISTERED FOR SELF ASSESSMENT?</p>
      
      <div value={selectedValue}
          onChange={handleRadioChange} style={{display:"flex", justifyContent:"space-between", margin:"0 32%"}}>
      <FormControlLabel checked={selectedValue === "Yes"} value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel checked={selectedValue === "No"} value="No" control={<Radio />} label="No" />
      </div>
      <Box className='register-inner' style={{alignItems:"center"}}>
        <HeadBox />
        {/* <LMTForm
          initialValues={StepOneInitials}
          validationSchema={stepOneValidation}
          formFields={StepOneFields}
          onSubmit={onSubmit}
        /> */}
      <div style={{display:"flex"}}>
     
      <button style={{backgroundColor:"#635DFE", color:"white", fontSize:"14px", fontWeight:"600", border:"none", padding:"10px 30px", borderRadius:"100px", marginLeft:"10px", cursor:"pointer"}}><Link to="/signup/freelancer/vat" style={{color:"white"}}>Continue</Link></button>
      </div>
      </Box>
    </div>
  </div>
  )
}

export default StepNine
