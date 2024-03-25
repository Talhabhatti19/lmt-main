import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { Formik, Form, Field } from "formik";

const Invoicing = () => {
  return (
    <>
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className="director-section-page" style={{margin:"0% 40% 0% 1%"}}>
            <div className="dsp-inner" style={{background: "white", margin: "3%", padding: "10px 0px 40px 40px", borderRadius: "10px"}}>
             
              
                <Formik>
                  <Form>
                  <div className="dsp-radio">
                   
                    <div className="dsp-inner-radio">
                      <p style={{fontSize: "15.5px", fontWeight: "bold"}}>Last Invoice Number Used</p>
                   
                    <Field
                            id="datetime"
                            name="datetime"
                            placeholder="0000 0000"
                            style={{width: "50%", padding: "10px", border: "none", background: "rgb(245, 246, 248)", borderRadius: "6px", outline: "none",}}
                          />
                    <div className="dsp-label">
                    <p style={{fontSize: "15.5px", fontWeight: "bold"}}>Payment Information</p>
                    <p style={{fontSize:"14px"}}>You don't have any bank accounts connected, click the button below to add one</p>
                    </div>
                    <p style={{textAlign: "center", background: "#F5F6F8", padding: "25px", borderRadius: "6px", margin: "0% 15% 0% 0%"}}>+ Add a bank account</p>
                    </div>

                    </div>
                  </Form>
                </Formik>
              
            </div>

          </div>
       
      </div>
    </div>
    </>
  )
}

export default Invoicing