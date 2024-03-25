import { Box } from "@mui/material";
import React, { useEffect } from "react";
import HeadBox from "../../../components/HeadBox/HeadBox";
import LMTForm from "../../../components/LMTForm/LMTForm";
import { stepOneValidation, StepOneInitials, StepOneFields } from "./data";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../../ContextAPI/FormDataContext";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/img/backArrow.png";
import TopLogoImage from "../../../assets/img/login-logo.png";
import { useState } from "react";
import { LAMT_API } from "../../../api";
import { showAlert } from "../../../utils";
import LMTLoader from "../../../components/LMTLoader/LMTLoader";

const StepOne = (companyNumber) => {
  const navigate = useNavigate();
  const [companyNames, setCompanyNames] = useState([]);
  const [searchCompany, setSearchCompany] = useState();
  const { formData, setFormData } = useFormData();
  const [selectData, setSelectData] = useState(true);
  const [selectedCompanyNumber,setSelectedCompanyNumber]=useState()
  const [loading,setLoading]=useState(false)
  const onSubmit = (values) => {
    setFormData({ ...formData, ...values });
    navigate("/signup/3");
  };
  const fetchCompanyData = async (searchTerm) => {
    try {
      setLoading(true)
      let companyData = await LAMT_API.endpoints.clientAdmin.getCompany(
        searchTerm
      );
      if (companyData.data && companyData.data.data) {
        setLoading(false)
        let responseData = companyData.data.data;
        console.log(responseData,"responseData")
        localStorage.setItem('companyNumber', responseData[0].company_number
        );
        localStorage.setItem('name', responseData[0].company_name
        );
          setCompanyNames(responseData);
          setSelectData(false) ;  
      }
    
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
   
  };
  const handleCompanyClick = (event) => {
    const selectedNumber = event.target.value;
    setSelectedCompanyNumber(selectedNumber);
    const selectedCompany = companyNames.find(item => item.company_number === selectedNumber);

    if (selectedCompany) {
      localStorage.setItem('name', selectedCompany.company_name);
      localStorage.setItem("companyNumber",selectedCompany.company_number)
    }

  };

  return (
    <div
      className="register-main"
      style={{ backgroundColor: "white", height: "100vh", padding: "0px" }}
    >
      {loading&&<LMTLoader/>}
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
          to="/signup-type"
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
          Select Your Company Name
        </p>
        <Box className="register-inner" style={{ alignItems: "center" }}>
          <HeadBox />
          {/* <LMTForm
            initialValues={StepOneInitials}
            validationSchema={stepOneValidation}
            formFields={StepOneFields}
            onSubmit={onSubmit}
          /> */}
          <div style={{ display: "flex" }}>
            {selectData  ? (
              <input
            style={{width:"250px"}}
                placeholder="Enter your company name"
                type="text"
                required
                onChange={(event) => {
                  event.persist(); 
                  setSearchCompany(event.target.value);
                localStorage.setItem("companyNumber",selectedCompanyNumber)
                  setSelectedCompanyNumber(null); 
                }}
              />
            ) : (
              <select  onChange={(event) => handleCompanyClick(event)} >
                {companyNames.map((item, index) => (
                  <option key={index} value={item.company_number} 
                 >
                    {item.company_name}
                  </option>
                ))}
              </select>
            )}
             <Link to={!selectData&& `/signup/directors`} style={{ color: "white" }}>
            <button
              onClick={() => fetchCompanyData(searchCompany)}
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
              }}
            >
              
             {!selectData? "Next":"Search"}
            </button>
            </Link>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default StepOne;
