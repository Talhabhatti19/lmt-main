import { Box } from "@mui/material";
import React, { useState } from "react";
import HeadBox from "../../../components/HeadBox/HeadBox";
import LMTForm from "../../../components/LMTForm/LMTForm";
import { StepFourFields, StepFourInitials, stepFourValidation } from "./data";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../../ContextAPI/FormDataContext";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/img/backArrow.png";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TopLogoImage from "../../../assets/img/login-logo.png";
import { LAMT_API } from "../../../api";
import LMTLoader from "../../../components/LMTLoader/LMTLoader";
const StepTen = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormData();
  const [check, setCheck] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [localStorageData, setLocalStorageData] = useState({});
  const [loading,setLoading]=useState(false)
  const onSubmit = (values) => {
    setFormData({ ...formData, ...values });
    console.log(formData);
    alert("Your Data Submitted Successfully");
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem("freelancerVar_type", value);
  };
  const handleSubmit = async () => {
    try {
      setLoading(true)
      const dataFromLocalStorage = {};
      const businessForm=localStorage.getItem('businessForm');
      const formData = JSON.parse(businessForm);
      console.log(formData,"myObject")
      const localStorageKeys = [
        "freelancerStart_date",
        "freelancer_assessment",
        "freelancerVat_status",
        "freelancerVar_type",
        "freelancerPhone_number",
      ];
      localStorageKeys.forEach((key) => {
        let value = localStorage.getItem(key);
          console.log(value.businessForm,"value")
        if (key === "vat_status") {
          value = value === "true";
        }
      
        dataFromLocalStorage[key] = value;
      });
      console.log(dataFromLocalStorage.businessForm, "dataFromLocalStorage");
      setLocalStorageData(dataFromLocalStorage);
      let register = await LAMT_API.endpoints.clientAdmin.buisnessRegister({
        structure:"Sole",
         name: formData.businessName,
         city:formData.city,
         postcode:formData.code,
         street_address:formData.address,
         business_start_date:dataFromLocalStorage.freelancerStart_date,
         self_assessment_registration:dataFromLocalStorage.freelancer_assessment=="Yes"?true:false,
        vat_status:dataFromLocalStorage.freelancerVat_status=="true"?true:false,
        vat_type:dataFromLocalStorage.freelancerVar_type,
        phone_number: dataFromLocalStorage.freelancerPhone_number,
      });
      if (register?.data?.success) {

        navigate('/pricing/plan')
        // navigate('/login')
        setLoading(false)
      } else {
        showAlert.success(register?.response?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
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
    <div
      className="register-main"
      style={{ backgroundColor: "white", height: "100vh", padding: "0px" }}
    >
      {loading &&<LMTLoader/>}
      <div
        className="top-logo-rtyp"
        style={{
          boxShadow: "0px 0px 14px 0px rgba(107, 119, 229, 0.08)",
          padding: "15px 30px",
        }}
      >
        <img width={200} className="logo" src={TopLogoImage} />
      </div>
      <div
        className="register-container"
        style={{ boxShadow: "none", background: "transparent" }}
      >
        <Link
          to="/signup/freelancer/assessment"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <img src={BackArrow} alt="back-arrow" style={{ width: "2%" }} />
          Back
        </Link>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            borderBottom: "0.5px solid #E8E8E8",
            paddingBottom: "10px",
          }}
        >
          Are you VAT registered?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 32%",
          }}
        >
          <p
            style={{ color: "#37393F", fontSize: "14px", textAlign: "center" }}
          >
            Are you VAT registered?
          </p>
          <FormControlLabel
            value="bottom"
            control={
              <Switch
                onClick={() => {
                  setCheck(!check);
                  localStorage.setItem("freelancerVat_status", !check);
                }}
                color="primary"
              />
            }
          />
        </div>
        {check && (
          <div style={{ display: "flex", justifyContent: "space-between", margin: "0 30%" }}>
            <div value={selectedValue} onChange={handleRadioChange}>
              <FormControlLabel value="standard" control={<Radio />} label="Standard" />
              <FormControlLabel value="flatRate" control={<Radio />} label="Flat Rate" />
            </div>
          </div>
        )}
        <Box className="register-inner" style={{ alignItems: "center" }}>
          <HeadBox />
          {/* <LMTForm
          initialValues={StepOneInitials}
          validationSchema={stepOneValidation}
          formFields={StepOneFields}
          onSubmit={onSubmit}
        /> */}
          <div style={{ display: "flex" }}>
            <button
            onClick={()=>{handleSubmit() }}
              style={{
                backgroundColor: "#635DFE",
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                padding: "10px 30px",
                borderRadius: "100px",
                marginLeft: "10px",
                cursor: "pointer",
                width: "200px",
              }}
            >
       
                Continue
             
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default StepTen;
