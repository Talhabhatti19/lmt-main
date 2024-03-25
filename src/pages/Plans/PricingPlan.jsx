import React, { useState, useEffect } from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const PricingPlan = () => {

    return (
        <>
            <div className="main-area" style={{height:"unset"}}>
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />

                    <div className='pricingPlan'>
                        <div className="pricing-plan-inner" style={{ background: "white", margin: "0 30% 0 3%", padding: "3px 0 10px 30px", borderRadius: "10px" }}>
                            <div className="ppi-area">
                                <p style={{ fontSize: "16px", fontWeight: "bold" }}>Find the right plan for your business</p>
                                <p>You can select Pro plan, based on your current <span style={{ color: "#635EFF", fontWeight: "bold" }}>average monthly revenue.</span></p>
                                <p> You can only downgrade your plan if your business meets <span style={{ color: "#635EFF", fontWeight: "bold" }}>these criteria.</span></p>
                                <p>Avg. monthly revenue:</p>
                            </div>

                            <Tabs>
                                <TabList>
                                    <Tab>Monthly</Tab>
                                    <Tab>Annually (save up to 30%)</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className='pricingTable' style={{margin:"0px 8px"}}>
                                        <table style={{ borderCollapse: "collapse", marginBottom:"5%" }}>
                                            <thead>
                                                <tr style={{ background: "#635EFF", color: "white" }}>
                                                    <th style={{ textAlign: "left", padding: "20px" }}>Pricing Plans <br /> <span style={{ fontWeight: "400" }}>*All prices exclude VAT</span></th>
                                                    <th style={{ textAlign: "left", padding: "20px" }}><span style={{ fontWeight: "400" }}>Starter</span> <br /> FREE <br /><span style={{ fontWeight: "400" }}>For avg. monthly <br />revenue up to £1,000</span>
                                                        <br /><button style={{ marginTop: "15px", width: "70%", height: "40px", background: "white", border: "none", borderRadius: "6px", color: "#635EFF", fontSize: "15.5px", cursor: "pointer" }}>Current Plan</button></th>
                                                    <th style={{ textAlign: "left", padding: "20px" }}><span style={{ fontWeight: "400" }}>Pro</span> <br /> £33/mo <br /><span style={{ fontWeight: "400" }}>For avg. monthly <br />revenue up to £1,000</span>
                                                        <br /><button style={{ marginTop: "15px", width: "70%", height: "40px", background: "white", border: "none", borderRadius: "6px", color: "#635EFF", fontSize: "15.5px", cursor: "pointer" }}>Pro</button></th>
                                                    <th style={{ textAlign: "left", padding: "20px" }}><span style={{ fontWeight: "400" }}>Unlimited</span> <br /> £66/mo <br /><span style={{ fontWeight: "400" }}>For avg. monthly <br />revenue up to £1,000</span>
                                                        <br /><button style={{ marginTop: "15px", width: "70%", height: "40px", background: "white", border: "none", borderRadius: "6px", color: "#635EFF", fontSize: "15.5px", cursor: "pointer" }}>Unlimited</button></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Expenses</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Invoicing</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Integrations</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Reporting</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Reminders</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Open banking</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Chat support</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>VAT</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Tax insights</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Multi currency</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>1st director payroll</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Tax optimisation</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Tax registrations</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Full payroll</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        +£4/mo per Employee

                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Video support</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Confirmation statements</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center"}}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Self Assessment</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £99
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £99
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £99
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Annual Accounts</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center"}}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0" }}>Registered Address</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0"
                                            }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </TabPanel>

                                
                                <TabPanel>
                                    <div className='pricingTable' style={{margin:"0px 8px"}}>
                                        <table style={{ borderCollapse: "collapse", marginBottom:"5%" }}>
                                            <thead>
                                                <tr style={{ background: "#635EFF", color: "white" }}>
                                                    <th style={{ textAlign: "left", padding: "20px" }}>Pricing Plans <br /> <span style={{ fontWeight: "400" }}>*All prices exclude VAT</span></th>
                                                    <th style={{ textAlign: "left", padding: "20px" }}><span style={{ fontWeight: "400" }}>Starter</span> <br /> FREE <br /><span style={{ fontWeight: "400" }}>For avg. monthly <br />revenue up to £1,000</span>
                                                        <br /><button style={{ marginTop: "15px", width: "70%", height: "40px", background: "white", border: "none", borderRadius: "6px", color: "#635EFF", fontSize: "15.5px", cursor: "pointer" }}>Current Plan</button></th>
                                                    <th style={{ textAlign: "left", padding: "20px" }}><span style={{ fontWeight: "400" }}>Pro</span> <br /> £39/mo <br /><span style={{ fontWeight: "400" }}>For avg. monthly <br />revenue up to £1,000</span>
                                                        <br /><button style={{ marginTop: "15px", width: "70%", height: "40px", background: "white", border: "none", borderRadius: "6px", color: "#635EFF", fontSize: "15.5px", cursor: "pointer" }}>Pro</button></th>
                                                    <th style={{ textAlign: "left", padding: "20px" }}><span style={{ fontWeight: "400" }}>Unlimited</span> <br /> £79/mo <br /><span style={{ fontWeight: "400" }}>For avg. monthly <br />revenue up to £1,000</span>
                                                        <br /><button style={{ marginTop: "15px", width: "70%", height: "40px", background: "white", border: "none", borderRadius: "6px", color: "#635EFF", fontSize: "15.5px", cursor: "pointer" }}>Unlimited</button></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Expenses</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Invoicing</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Integrations</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Reporting</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Reminders</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Open banking</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Chat support</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>VAT</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Tax insights</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Multi currency</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>1st director payroll</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Tax optimisation</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Tax registrations</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Full payroll</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        +£4/mo per Employee

                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Video support</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Confirmation statements</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                            <path d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z" fill="#E1DEDF" />
                                                        </svg>
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                            <path d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z" fill="#39CC8A" />
                                                        </svg>
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center"}}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Self Assessment</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £99
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £99
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £99
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>Annual Accounts</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                </tr>

                                                <tr style={{ textAlign: "center"}}>
                                                    <td style={{ textAlign: "left", padding: "17px", borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0" }}>Registered Address</td>
                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0"
                                            }}>
                                                    £200
                                                    </td>

                                                    <td style={{ borderLeft: "2px solid #97A0B0", borderRight: "2px solid #97A0B0", borderBottom: "2px solid #97A0B0" }}>
                                                    £200
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPlan