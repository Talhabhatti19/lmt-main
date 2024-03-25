import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadBox from "../../../components/HeadBox/HeadBox";
import { useNavigate, useParams } from "react-router-dom";
import { useFormData } from "../../../ContextAPI/FormDataContext";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/img/backArrow.png";
// import SD from '../../../assets/img/selectDirector.jpg'
import SD from "../../../assets/img/selectDirector.png";
import TopLogoImage from "../../../assets/img/login-logo.png";
import { LAMT_API } from "../../../api";
import User from "../../../assets/img/tdesign_user.png";
import { showAlert } from "../../../utils";
import LMTLoader from "../../../components/LMTLoader/LMTLoader";

const StepTwo = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormData();
  const [companyData, setCompanyData] = useState([]);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [loading,setLoading]=useState(false)
  const company = useParams();
  const myObject = company;
  const companyNumber = myObject.company;
  const companyId = localStorage.getItem("companyNumber");
  const onSubmit = (values) => {
    setFormData({ ...formData, ...values });
    navigate("/signup/3");
  };
  useEffect(() => {
    directorData();
  }, [companyNumber]);

  const directorData = async () => {
    try {
      setLoading(true)
      let companyDataResponse =
        await LAMT_API.endpoints.clientAdmin.getDirector(companyId);

      if (companyDataResponse) {
        setLoading(false)
        let res = companyDataResponse.data.data;
        setCompanyData(res);
      } else {
        console.warn("No company number selected.");
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const handleDirector = (selectedDirectorName) => {
    const selectedDirectorObject = companyData.find(
      (item) => item.name === selectedDirectorName
    );

    if (selectedDirectorObject) {
      // Store the selected company name in local storage
      localStorage.setItem("director", selectedDirectorObject.name);
      // Set the selected director in the state
      setSelectedDirector(selectedDirectorObject);
    }
  };
  return (
    // <div className='register-main'>
    //   <div className='register-container'>
    //     <Box className='register-inner'>
    //       <HeadBox />
    //       <LMTForm
    //         initialValues={StepTwoInitials}
    //         validationSchema={stepTwoValidation}
    //         formFields={StepTwoFields}
    //         onSubmit={onSubmit}
    //       />
    //     </Box>
    //   </div>
    // </div>
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
          to="/signup/search"
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
          Select Director
        </p>
        <Box className="register-inner" style={{ alignItems: "center" }}>
          <HeadBox />
          {/* <LMTForm
          initialValues={StepOneInitials}
          validationSchema={stepOneValidation}
          formFields={StepOneFields}
          onSubmit={onSubmit}
        /> */}
          <div>
            {companyData.map((item, index) => (
              <div
              style={{
                fontWeight: "600",
                marginBottom: "6px",
                color: selectedDirector === item ? "blue" : "black",
                display: "flex", justifyContent: "start"
              }}
                key={index}
     
                className="align-items-center mb-3"
              >
                <div style={{ marginRight: "10px" }}>
                  <img
                    src={User}
                    alt="User Image"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      marginRight: "2rem",
                      marginBottom: "1rem",
                    }}
                  />
                </div>
                <div className="d-flex">
                  <div
                    style={{
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: selectedDirector === item ? "blue" : "black",
                    }}
                    onClick={() => handleDirector(item.name)}
                  >
                    {item.name}
                  </div>
                  <div style={{ fontWeight: "300" }}>kackjones@example.com</div>{" "}
                  {/* Replace "item.email" with the actual property containing the email */}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              navigate("/signup/number");
            }}
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
              width: "50%",
            }}
          >
            Next
          </button>
        </Box>
      </div>
    </div>
  );
};

export default StepTwo;
