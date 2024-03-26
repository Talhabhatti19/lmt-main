import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { Formik, Form, Field } from "formik";


const Director = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="director-section-page" style={{margin:"0% 47% 0% 1%"}}>
            <div className="dsp-inner" style={{background: "white", margin: "3%", padding: "10px 0px 10px 40px", borderRadius: "10px"}}>
             
              
                <Formik>
                  <Form>
                  <div className="dsp-radio">
                    <div className="dsp-inner-radio">
                    <p style={{fontSize: "15.5px", fontWeight: "bold"}}>Are you registered for Self Assessment?</p>
                      <label>
                        <Field type="radio" name="picked" />
                        Not Registered
                      </label>
                      <label style={{margin:'0 20px'}}>
                        <Field type="radio" name="picked" />
                        Waiting on HMRC
                      </label>
                      <label>
                        <Field type="radio" name="picked" />
                        Registered
                      </label>
                    </div>

                    <div className="dsp-inner-radio">
                    <p style={{fontSize: "15.5px", fontWeight: "bold"}}>Registered From</p>
                      <label>
                        <Field type="radio" name="picked" />
                        2020/2021 or earlier
                      </label>
                      <label style={{margin:'0 20px'}}>
                        <Field type="radio" name="picked" />
                        2021/2022
                      </label>
                      <label style={{margin:'0 20px'}}>
                        <Field type="radio" name="picked" />
                        2022/2023
                      </label>
                      <label>
                        <Field type="radio" name="picked" />
                        2023/2024
                      </label>
                    </div>

                    <div className="dsp-inner-radio">
                      <p style={{fontSize: "15.5px", fontWeight: "bold"}}>Bank Details for Dividend Payments</p>
                    <div className="dsp-label">
                    <label>Account Number</label>
                    </div>
                    <Field
                            id="datetime"
                            name="datetime"
                            placeholder="0000 0000"
                            style={{width: "50%", padding: "10px", margin: "3% auto", border: "none", background: "rgb(245, 246, 248)", borderRadius: "6px", outline: "none",}}
                          />
                    <div className="dsp-label">
                    <label>Sort Code</label>
                    </div>
                    <Field
                            id="datetime"
                            name="datetime"
                            placeholder="00-00-00"
                            style={{width: "50%", padding: "10px", margin: "3% auto", border: "none", background: "rgb(245, 246, 248)", borderRadius: "6px", outline: "none",}}
                          />
                    </div>

                    <button style={{fontSize: "16px", padding: "15px", background: "rgb(99, 94, 255)", color: "white", borderRadius: "6px", border: "none", width: "60%", margin: "2% 3% 3% 0%", cursor: "pointer"}}>Save Payment Information</button>
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

export default Director