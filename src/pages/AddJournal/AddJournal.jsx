import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";


const AddJournal = () => {

    return (
        <>
            <div className="main-area">
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />

                    <div>
                        <Formik>
                            <Form>
                                <div className="pocketExpense-form">
                                    <div className="pef-inner">
                                        <div className="pefi-area-main">
                                            <div className="pefi-area">
                                                <div className="labels">
                                                    <label htmlFor="description">Description</label>
                                                </div>
                                                <div className="fields">
                                                    <Field
                                                        id="description"
                                                        name="description"
                                                        placeholder="Description"
                                                    />
                                                </div>
                                            </div>
                                            <div className="pefi-area">
                                                <div className="labels">
                                                    <label htmlFor="datetime">Date & Time</label>
                                                </div>

                                                <div className="fields">
                                                    <Field
                                                        id="datetime"
                                                        name="datetime"
                                                        placeholder="3rd April 2023 at 01:09"
                                                    />
                                                </div>
                                            </div>

                                            <div className="pefi-area">
                                                <div className="labels">
                                                    <label htmlFor="value">Value</label>
                                                </div>

                                                <div className="fields">
                                                    <div className="inner-field">
                                                        <p className="currency">£</p>
                                                        <Field id="value" name="value" placeholder="0" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-center">
                                            <div className="fc-inner-section">
                                                <div className="fcis-start">
                                                    <div className="fcis-inner">
                                                        <div className="fcis-img">
                                                            <img src={Uncategorised} alt="uncategorised" />
                                                        </div>

                                                        <div className="fcis-text">
                                                            <p className="uncat-heading">
                                                                <b>Uncategorised</b> <br />
                                                                <span className="uncat-para">
                                                                    £0.00(£0.00 VAT)
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <div className="fcis-expand">
                                                            <ExpandMoreIcon />
                                                        </div>
                                                    </div>

                                                    <div className="fcis-inner" style={{position:"relative", right:"20px"}}>
                                                        <div className="fcis-img">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clip-path="url(#clip0_1343_468)">
                                                                    <path d="M15.3748 10.0014C15.2722 10.0014 15.1714 9.95948 15.0988 9.88671C15.026 9.81394 14.9844 9.71303 14.9844 9.60999C14.9844 9.50709 15.026 9.40619 15.0988 9.33341C15.1714 9.26064 15.2722 9.21875 15.3748 9.21875C15.4777 9.21875 15.5784 9.26064 15.651 9.33341C15.7237 9.40619 15.7655 9.50709 15.7655 9.60999C15.7655 9.71303 15.7237 9.81394 15.651 9.88671C15.5784 9.95948 15.4777 10.0014 15.3748 10.0014Z" fill="#635EFF" />
                                                                    <path d="M18.2766 18.9164H1.64536C1.03729 18.9164 0.49286 18.6015 0.188904 18.074C-0.115051 17.5464 -0.115051 16.9165 0.188904 16.3891L8.50466 1.95764C8.80861 1.43018 9.35305 1.11523 9.96096 1.11523C10.5689 1.11523 11.1133 1.43018 11.4173 1.95764L14.8654 7.94162C14.9733 8.12875 14.9092 8.36817 14.7225 8.47626C14.5356 8.5842 14.2968 8.52014 14.1889 8.33301L10.7408 2.34903C10.578 2.06665 10.2864 1.89786 9.96096 1.89786C9.63549 1.89786 9.34389 2.06665 9.18108 2.34903L0.86548 16.7803C0.702669 17.0628 0.702669 17.4001 0.86548 17.6826C1.02814 17.9652 1.31974 18.1338 1.64536 18.1338H18.2766C18.6022 18.1338 18.8936 17.9652 19.0564 17.6826C19.2192 17.4001 19.2192 17.0628 19.0564 16.7803L15.7231 10.9955C15.6153 10.8084 15.6794 10.5691 15.8661 10.461C16.0529 10.3529 16.2918 10.417 16.3997 10.6043L19.733 16.3891C20.037 16.9165 20.037 17.5464 19.733 18.074C19.4289 18.6015 18.8846 18.9164 18.2766 18.9164Z" fill="#635EFF" />
                                                                    <path d="M9.96079 12.956C9.27155 12.956 8.71094 12.3941 8.71094 11.7037V8.17173C8.71094 7.48114 9.27155 6.91943 9.96079 6.91943C10.65 6.91943 11.2106 7.48114 11.2106 8.17173V11.7037C11.2106 12.3941 10.65 12.956 9.96079 12.956ZM9.96079 7.70221C9.7023 7.70221 9.49204 7.91289 9.49204 8.17173V11.7037C9.49204 11.9627 9.7023 12.1734 9.96079 12.1734C10.2193 12.1734 10.4295 11.9627 10.4295 11.7037V8.17173C10.4295 7.91289 10.2193 7.70221 9.96079 7.70221Z" fill="#635EFF" />
                                                                    <path d="M9.96079 16.4001C9.27155 16.4001 8.71094 15.8384 8.71094 15.1478C8.71094 14.4572 9.27155 13.8955 9.96079 13.8955C10.65 13.8955 11.2106 14.4572 11.2106 15.1478C11.2106 15.4823 11.0806 15.7968 10.8446 16.0333C10.6085 16.2698 10.2947 16.4001 9.96079 16.4001ZM9.96079 14.6781C9.7023 14.6781 9.49204 14.8888 9.49204 15.1478C9.49204 15.4068 9.7023 15.6175 9.96079 15.6175C10.0859 15.6175 10.2037 15.5685 10.2922 15.4799C10.3807 15.3912 10.4295 15.2732 10.4295 15.1478C10.4295 14.8888 10.2193 14.6781 9.96079 14.6781Z" fill="#635EFF" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_1343_468">
                                                                        <rect width="20" height="20" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>

                                                        <div className="fcis-text">
                                                            <p className="uncat-heading" style={{fontSize:"12px", marginLeft:"14px"}}>
                                                                This side represents the total amount of the journal. To make adjustments to categories that include the VAT effect, use the 'Apply it against' section.
                                                            </p>
                                                        </div>

                                                        
                                                    </div>



                                                    <div className="fcis-inner">
                                                        <div className="fcis-img">
                                                            <img src={Uncategorised} alt="uncategorised" />
                                                        </div>

                                                        <div className="fcis-text">
                                                            <p className="uncat-heading">
                                                                <b>Uncategorised</b> <br />
                                                                <span className="uncat-para">
                                                                    £0.00(£0.00 VAT)
                                                                </span>
                                                            </p>
                                                        </div>

                                                        <div className="fcis-expand">
                                                            <ExpandMoreIcon />
                                                        </div>
                                                    </div>


                                                </div>


                                            </div>

                                            <div className="extra" style={{ display: "flex", margin:"2% 0%" }}>
                                                <div className="fcis-inner-2" style={{ background: "#F5F6F8", padding: "20px 0px", borderRadius: "6px", width: "27%", textAlign: "center", cursor: "pointer" }}>
                                                    <div className="fcis-text">
                                                        <p className="uncat-heading-line">
                                                            + Add extra line item
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="fcis-inner" style={{ marginLeft: "8%", background: "#F5F6F8", padding: "20px 0px", borderRadius: "6px", width: "27%", textAlign: "center", cursor: "pointer" }}>
                                                    <div className="fcis-text">
                                                        <p className="uncat-heading-line">
                                                            + Attachments
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="vat-rate">
                                            <p className="vr-para">VAT Rate</p></div>
                                        <div role="group" aria-labelledby="my-radio-group" className="radio-row">
                                            <label>
                                                <Field type="radio" name="picked" value={'1'} />
                                                Standard Rate
                                            </label>
                                            <label style={{ margin: "0px 30px" }}>
                                                <Field type="radio" name="picked" value={'2'} />
                                                Exempt
                                            </label>

                                            <label style={{ margin: "0px 30px" }}>
                                                <Field type="radio" name="picked" value={'3'} />
                                                Reduced Rate (12.5%)
                                            </label>

                                            <label style={{ margin: "0px 30px" }}>
                                                <Field type="radio" name="picked" value={'4'} />
                                                Reduced Rate
                                            </label>

                                            <label style={{ margin: "0px 30px" }}>
                                                <Field type="radio" name="picked" value={'5'} />
                                                No VAT (Outside Scope)
                                            </label>
                                        </div>

                                        <div role="group" aria-labelledby="my-radio-group" className="radio-row-2">
                                            <label>
                                                <Field type="radio" name="picked" value={'6'} />
                                                Reverse Charge (20%)
                                            </label>
                                            <label style={{ margin: "0px -52px" }}>
                                                <Field type="radio" name="picked" value={'7'} />
                                                Zero Rate
                                            </label>

                                        </div>

                                        <div className="form-button">
                                            <button type="submit" className="btn-save">Save Changes</button>
                                            <button type="button" className="btn-delete">Delete Journal</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddJournal;
