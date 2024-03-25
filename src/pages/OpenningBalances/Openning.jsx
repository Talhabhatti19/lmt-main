import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { Formik, Form, Field } from "formik";

const Openning = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="vat-page-section">
            <div className="vat-inner" style={{ background: "white", margin: "0 50% 0% 3%", padding: "20px 40px 40px 40px", borderRadius: "20px" }}>
              <div className="vat-inner-top">
                <p style={{ fontWeight: "bold" }}>Import date</p>
                <Formik>
                  <Form>
                    <div className="dsp-radio">

                      <div className="dsp-inner-radio">
                        <p style={{ fontSize: "15.5px" }}>We’ll pull all of your data since the last time you filed your accounts or from your date of incorporation (15/11/2022) but you can change it here if you want to start LAMT from a different date.
                        </p>

                        <Field
                          id="datetime"
                          name="datetime"
                          placeholder="26th May 2023"
                          style={{ width: "100%", padding: "15px", border: "none", background: "rgb(245, 246, 248)", borderRadius: "6px", outline: "none", }}
                        />
                        <div className="dsp-label">

                          <div className="vat-inner-tag" style={{ display: "flex", alignItems: "center", background: "#F5F6F8", width: "100%", margin: "3% auto", paddingRight: "2px", borderRadius: "6px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 20 20" fill="none">
                              <g clip-path="url(#clip0_1228_866)">
                                <path d="M15.3748 10.0014C15.2722 10.0014 15.1714 9.95948 15.0988 9.88671C15.026 9.81394 14.9844 9.71303 14.9844 9.60999C14.9844 9.50709 15.026 9.40619 15.0988 9.33341C15.1714 9.26064 15.2722 9.21875 15.3748 9.21875C15.4777 9.21875 15.5784 9.26064 15.651 9.33341C15.7237 9.40619 15.7655 9.50709 15.7655 9.60999C15.7655 9.71303 15.7237 9.81394 15.651 9.88671C15.5784 9.95948 15.4777 10.0014 15.3748 10.0014Z" fill="#635EFF" />
                                <path d="M18.2766 18.9164H1.64536C1.03729 18.9164 0.49286 18.6015 0.188904 18.074C-0.115051 17.5464 -0.115051 16.9165 0.188904 16.3891L8.50466 1.95764C8.80861 1.43018 9.35305 1.11523 9.96096 1.11523C10.5689 1.11523 11.1133 1.43018 11.4173 1.95764L14.8654 7.94162C14.9733 8.12875 14.9092 8.36817 14.7225 8.47626C14.5356 8.5842 14.2968 8.52014 14.1889 8.33301L10.7408 2.34903C10.578 2.06665 10.2864 1.89786 9.96096 1.89786C9.63549 1.89786 9.34389 2.06665 9.18108 2.34903L0.86548 16.7803C0.702669 17.0628 0.702669 17.4001 0.86548 17.6826C1.02814 17.9652 1.31974 18.1338 1.64536 18.1338H18.2766C18.6022 18.1338 18.8936 17.9652 19.0564 17.6826C19.2192 17.4001 19.2192 17.0628 19.0564 16.7803L15.7231 10.9955C15.6153 10.8084 15.6794 10.5691 15.8661 10.461C16.0529 10.3529 16.2918 10.417 16.3997 10.6043L19.733 16.3891C20.037 16.9165 20.037 17.5464 19.733 18.074C19.4289 18.6015 18.8846 18.9164 18.2766 18.9164Z" fill="#635EFF" />
                                <path d="M9.96079 12.956C9.27155 12.956 8.71094 12.3941 8.71094 11.7037V8.17173C8.71094 7.48114 9.27155 6.91943 9.96079 6.91943C10.65 6.91943 11.2106 7.48114 11.2106 8.17173V11.7037C11.2106 12.3941 10.65 12.956 9.96079 12.956ZM9.96079 7.70221C9.7023 7.70221 9.49204 7.91289 9.49204 8.17173V11.7037C9.49204 11.9627 9.7023 12.1734 9.96079 12.1734C10.2193 12.1734 10.4295 11.9627 10.4295 11.7037V8.17173C10.4295 7.91289 10.2193 7.70221 9.96079 7.70221Z" fill="#635EFF" />
                                <path d="M9.96079 16.4001C9.27155 16.4001 8.71094 15.8384 8.71094 15.1478C8.71094 14.4572 9.27155 13.8955 9.96079 13.8955C10.65 13.8955 11.2106 14.4572 11.2106 15.1478C11.2106 15.4823 11.0806 15.7968 10.8446 16.0333C10.6085 16.2698 10.2947 16.4001 9.96079 16.4001ZM9.96079 14.6781C9.7023 14.6781 9.49204 14.8888 9.49204 15.1478C9.49204 15.4068 9.7023 15.6175 9.96079 15.6175C10.0859 15.6175 10.2037 15.5685 10.2922 15.4799C10.3807 15.3912 10.4295 15.2732 10.4295 15.1478C10.4295 14.8888 10.2193 14.6781 9.96079 14.6781Z" fill="#635EFF" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1228_866">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>If you are on the flat rate scheme and you are in your first year of being VAT registered, you'll be eligible for a 1% reduction in the amount you pay to HMRC
                            </p>
                          </div>
                          <p>You cannot change your opening balance date as you already have confirmed transactions.
                          </p>
                        </div>

                      </div>

                      <button style={{ fontSize: "16px", padding: "20px", background: "rgb(99, 94, 255)", color: "white", borderRadius: "6px", border: "none", width: "100%", margin: "2% 3% 3% 0%", cursor: "pointer" }}>Save Changes</button>
                    </div>
                  </Form>
                </Formik>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Openning