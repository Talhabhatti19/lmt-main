import { Box } from "@mui/material";
import React from "react";
import HeadBox from "../../../components/HeadBox/HeadBox";
import LMTForm from "../../../components/LMTForm/LMTForm";
import { StepFourFields, StepFourInitials, stepFourValidation } from "./data";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../../ContextAPI/FormDataContext";
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/img/backArrow.png";
import TopLogoImage from "../../../assets/img/login-logo.png";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

const StepSix = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormData();
  const onSubmit = (values, { setSubmitting }) => {
    // Do something with the form values (e.g., submit them to a server)
    console.log(values);
    const data = JSON.stringify(values);
    localStorage.setItem("businessForm", data);
    navigate("/signup/freelancer/no");
    // After submitting, you might want to setSubmitting(false) to indicate that the form submission is complete
    setSubmitting(false);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    businessName: Yup.string().required("Please enter your business Name"),
    address: Yup.string().required("Please enter your address"),
    city: Yup.string().required("Please enter your city"),
    code: Yup.string().required("Please enter your code"),
    /* .min(8, "Password must be at least 8 characters")
      .max(15, "Password not more than 15 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Min 8 and Max 15 character with at least (one capital, one special symbol and one number"
      ) */
  });
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
            borderBottom: "0.5px solid rgb(232, 232, 232)",
            paddingBottom: "10px",
          }}
        >
          Business Details
        </p>
        <Box className="register-inner" style={{ alignItems: "center" }}>
          {/* <HeadBox /> */}
          {/* <LMTForm
          initialValues={StepOneInitials}
          validationSchema={stepOneValidation}
          formFields={StepOneFields}
          onSubmit={onSubmit}
        /> */}
          <Formik
            initialValues={{
              name: "",
              businessName: "",
              address: "",
              city: "",
              code: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => {
              return (
                <Form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Field
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      style={{
                        border: "1px solid #DEE3FC",
                        padding: "10px",
                        borderRadius: "100px",
                        width: "300px",
                      }}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                    <Field
                      className="form-control"
                      name="businessName"
                      id="businessName"
                      type="text"
                      placeholder="Business Name"
                      style={{
                        border: "1px solid #DEE3FC",
                        padding: "10px",
                        borderRadius: "100px",
                        width: "300px",
                      }}
                    />
                    <ErrorMessage
                      name="businessName"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                    <Field
                      className="form-control"
                      name="address"
                      id="address"
                      type="text"
                      placeholder="Street Address *"
                      style={{
                        border: "1px solid #DEE3FC",
                        padding: "10px",
                        borderRadius: "100px",
                        width: "300px",
                      }}
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                    <Field
                      className="form-control"
                      name="city"
                      id="city"
                      type="text"
                      placeholder="City / Town *"
                      style={{
                        border: "1px solid #DEE3FC",
                        padding: "10px",
                        borderRadius: "100px",
                        width: "300px",
                      }}
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                    <Field
                      className="form-control"
                      name="code"
                      id="code"
                      type="text"
                      placeholder="Postcode *"
                      style={{
                        border: "1px solid #DEE3FC",
                        padding: "10px",
                        borderRadius: "100px",
                        width: "300px",
                      }}
                    />
                    <ErrorMessage
                      name="code"
                      component="div"
                      className="invalid-feedback text-danger"
                    />

                    <button
                      type="submit"
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
                      Next
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </div>
    </div>
  );
};

export default StepSix;
