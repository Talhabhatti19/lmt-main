import { Box } from "@mui/material";
import React from "react";
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
import { useState } from "react";
import { LAMT_API } from "../../../api";
import LMTLoader from "../../../components/LMTLoader/LMTLoader";

const StepFive = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("Under £1,000");
  const [localStorageData, setLocalStorageData] = useState({});
  const [loading,setLoading]=useState(false)
  // const { formData, setFormData } = useFormData()
  // const onSubmit = (values) => {
  //   setFormData({ ...formData, ...values });
  //   console.log(formData)
  //   alert("Your Data Submitted Successfully")
  //   navigate('/login')
  // }
  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem("vat_value", value);
  };
  const onSumbit = async () => {
    try {
      setLoading(true)

      const dataFromLocalStorage = {};
      const localStorageKeys = [
        "structure",
        "name",
        "director",
        "vat_value",
        "phone_number",
        "vat_status",
      ];
      localStorageKeys.forEach((key) => {
        let value = localStorage.getItem(key);
        if (key === "vat_status") {
          value = value === "true";
        }
        dataFromLocalStorage[key] = value;
      });
      setLocalStorageData(dataFromLocalStorage);
      let register = await LAMT_API.endpoints.clientAdmin.buisnessRegister({
        structure:"Company",
        name: dataFromLocalStorage.name,
        director: dataFromLocalStorage.director,
        vat_status:true,
        vat_type: 0,
        average_monthly_revenue:selectedValue,
        phone_number: dataFromLocalStorage.phone_number,
      });
      navigate("/pricing/plan")
      if (register?.data?.success) {
        showAlert.success(register?.data?.message);
        setLoading(false)
        // navigate('/login')
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
      {loading && <LMTLoader/>}
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
          to="/signup/vad/register"
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
          What's your average monthly revenue?
        </p>

        <div
          value={selectedValue}
          onChange={handleRadioChange}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <FormControlLabel
            checked={selectedValue === "Under £1,000"}
            value="Under £1,000"
            control={<Radio />}
            label="Under £1,000"
          />
          <FormControlLabel
            checked={selectedValue === "Between £1,000 and £10,000"}
            value="Between £1,000 and £10,000"
            control={<Radio />}
            label="Between £1,000 and £10,000"
          />
          <FormControlLabel
            checked={selectedValue === "Over £10,000"}
            value="Over £10,000"
            control={<Radio />}
            label="Over £10,000"
          />
        </div>
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
              onClick={onSumbit}
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
              Submit
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default StepFive;
