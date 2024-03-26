import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import plan from "../../assets/img/plan.png";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PricingPlanNew = () => {
  const [activeButton, setActiveButton] = useState("Current Plan");

  const navigate=useNavigate()
  const handleChangeColor = (buttonName) => {
    setActiveButton(buttonName);  
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid xs={5}>
            <h1
              style={{
                fontSize: "50px",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              Find Right Plan For Your Buisness!
            </h1>
            <p>
              Get what you paid for ember back in a year through tax
              hacks,expert advise and more
            </p>
          </Grid>
          <Grid xs={7}>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <img src={plan} alt="" height={400} width={400} />
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
            item
            xs={4}
          >
            <div>
              <img src={plan} alt="" height={50} width={50} />
            </div>
            <div style={{ paddingLeft: "1rem" }}>
              <div style={{ fontSize: "22px", fontWeight: "800" }}>
                Save time & money
              </div>
              <div>save 13 hrs on admin, save more in tax</div>
            </div>
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={4}
          >
            <div>
              <img src={plan} alt="" height={50} width={50} />
            </div>
            <div style={{ paddingLeft: "1rem" }}>
              <div style={{ fontSize: "22px", fontWeight: "800" }}>
                Accountant Support
              </div>
              <div>Get ansers to your queries within 5 minutes</div>
            </div>
          </Grid>

          <Grid
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
            item
            xs={4}
          >
            <div>
              <img src={plan} alt="" height={50} width={50} />
            </div>
            <div style={{ paddingLeft: "1rem" }}>
              <div style={{ fontSize: "22px", fontWeight: "800" }}>
                Pay-as-you-grow
              </div>
              <div>Never pay more than you have</div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <Grid
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h2>Select your avergae monthly revenue</h2>
            </div>
          </Grid>
          <Grid lg={5}>
            <div>
              we find the cheapest plan for you by taking the monthly avergae of
              your income over a 90-day period .upgrade at any time
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <Tabs>
            <TabList>
              <Tab>Monthly</Tab>
              <Tab>Annually (save up to 30%)</Tab>
            </TabList>

            <TabPanel>
              <div className="pricingTable" style={{ margin: "0px 8px" }}>
                <table
                  style={{ borderCollapse: "collapse", marginBottom: "5%" }}
                >
                  <thead>
                    <tr style={{ color: "black" }}>
                      <th style={{ textAlign: "left", padding: "20px" }}></th>
                      <th style={{ textAlign: "left", padding: "20px" }}>
                        <span style={{ fontWeight: "400" }}>Starter</span>{" "}
                        <br /> FREE <br />
                        <span style={{ fontWeight: "400" }}>
                          For avg. monthly <br />
                          revenue up to £1,000
                        </span>
                        <br />
                        <div>
                          <button
                            style={{
                              marginTop: "15px",
                              width: "70%",
                              height: "40px",
                              background:
                                activeButton === "Current Plan"
                                  ? "#635EFF"
                                  : "white",
                              border: "none",
                              borderRadius: "6px",
                              color:
                                activeButton === "Current Plan"
                                  ? "white"
                                  : "#635EFF",
                              fontSize: "15.5px",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleChangeColor("Current Plan");
                              navigate("/payment/method")
                            }}
                        
                          >
                          
                            Current Plan
                          </button>
                        </div>
                      </th>
                      <th style={{ textAlign: "left", padding: "20px" }}>
                        <span style={{ fontWeight: "400" }}>Pro</span> <br />{" "}
                        £33/mo <br />
                        <span style={{ fontWeight: "400" }}>
                          For avg. monthly <br />
                          revenue up to £1,000
                        </span>
                        <br />
                        <button
                          style={{
                            marginTop: "15px",
                            width: "70%",
                            height: "40px",
                            background:
                              activeButton === "pro" ? "#635EFF" : "white",
                            border: "none",
                            borderRadius: "6px",
                            color: activeButton === "pro" ? "white" : "#635EFF",
                            fontSize: "15.5px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleChangeColor("pro");
                          }}
                        >
                          Pro
                        </button>
                      </th>
                      <th style={{ textAlign: "left", padding: "20px" }}>
                        <span style={{ fontWeight: "400" }}>Unlimited</span>{" "}
                        <br /> £66/mo <br />
                        <span style={{ fontWeight: "400" }}>
                          For avg. monthly <br />
                          revenue up to £1,000
                        </span>
                        <br />
                        <button
                          style={{
                            marginTop: "15px",
                            width: "70%",
                            height: "40px",

                            background:
                              activeButton === "unlimited"
                                ? "#635EFF"
                                : "white",
                            border: "none",
                            borderRadius: "6px",
                            color:
                              activeButton === "unlimited"
                                ? "white"
                                : "#635EFF",
                            fontSize: "15.5px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleChangeColor("unlimited");
                          }}
                        >
                          Unlimited
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Expenses
                      </td>

                      <td
                        style={{
                          background: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Invoicing
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Integrations
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Reporting
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Reminders
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Open banking
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Chat support
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        VAT
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Tax insights
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Multi currency
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        1st director payroll
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Tax optimisation
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Tax registrations
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Full payroll
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        +£4/mo per Employee
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Video support
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Confirmation statements
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Self Assessment
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £99
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £99
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £99
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Annual Accounts
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £200
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £200
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £200
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          color: "white",
                          background: "#635EFF",
                          borderRadius: "10px",
                        }}
                      >
                        Registered Address
                      </td>
                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £200
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £200
                      </td>

                      <td style={{ background: "white", borderRadius: "10px" }}>
                        £200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* <TabPanel>
              <div className="pricingTable" style={{ margin: "0px 8px" }}>
                <table
                  style={{ borderCollapse: "collapse", marginBottom: "5%" }}
                >
                  <thead>
                    <tr style={{ background: "#635EFF", color: "white" }}>
                      <th style={{ textAlign: "left", padding: "20px" }}>
                        Pricing Plans <br />{" "}
                        <span style={{ fontWeight: "400" }}>
                          *All prices exclude VAT
                        </span>
                      </th>
                      <th style={{ textAlign: "left", padding: "20px" }}>
                        <span style={{ fontWeight: "400" }}>Starter</span>{" "}
                        <br /> FREE <br />
                        <span style={{ fontWeight: "400" }}>
                          For avg. monthly <br />
                          revenue up to £1,000
                        </span>
                        <br />
                        <button
                          style={{
                            marginTop: "15px",
                            width: "70%",
                            height: "40px",
                            background: "white",
                            border: "none",
                            borderRadius: "6px",
                            color: "#635EFF",
                            fontSize: "15.5px",
                            cursor: "pointer",
                          }}
                        >
                          Current Plan
                        </button>
                      </th>
                      <th style={{ textAlign: "left", padding: "20px" }}>
                        <span style={{ fontWeight: "400" }}>Pro</span> <br />{" "}
                        £39/mo <br />
                        <span style={{ fontWeight: "400" }}>
                          For avg. monthly <br />
                          revenue up to £1,000
                        </span>
                        <br />
                        <button
                          style={{
                            marginTop: "15px",
                            width: "70%",
                            height: "40px",
                            background: "white",
                            border: "none",
                            borderRadius: "6px",
                            color: "#635EFF",
                            fontSize: "15.5px",
                            cursor: "pointer",
                          }}
                        >
                          Pro
                        </button>
                      </th>
                      <th style={{ textAlign: "left", padding: "20px" }}>
                        <span style={{ fontWeight: "400" }}>Unlimited</span>{" "}
                        <br /> £79/mo <br />
                        <span style={{ fontWeight: "400" }}>
                          For avg. monthly <br />
                          revenue up to £1,000
                        </span>
                        <br />
                        <button
                          style={{
                            marginTop: "15px",
                            width: "70%",
                            height: "40px",
                            background: "white",
                            border: "none",
                            borderRadius: "6px",
                            color: "#635EFF",
                            fontSize: "15.5px",
                            cursor: "pointer",
                          }}
                        >
                          Unlimited
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Expenses
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Invoicing
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Integrations
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Reporting
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Reminders
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Open banking
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Chat support
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        VAT
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Tax insights
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Multi currency
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        1st director payroll
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Tax optimisation
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Tax registrations
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Full payroll
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        +£4/mo per Employee
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Video support
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Confirmation statements
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M6.64999 8.95001L2.29999 13.3L0 11L4.35001 6.64999L0 2.29999L2.29999 0L6.64999 4.35001L11 0L13.3 2.29999L8.94998 6.64999L13.3 11L11 13.3L6.64999 8.95001Z"
                            fill="#E1DEDF"
                          />
                        </svg>
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                        >
                          <path
                            d="M0 8.62002L2.29999 6.32003L5.45001 9.47002L14.15 0.77002L16.45 3.07002L5.45001 14.07L0 8.62002Z"
                            fill="#39CC8A"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Self Assessment
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        £99
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        £99
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        £99
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center", background: "#F7F7FF" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        Annual Accounts
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        £200
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        £200
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                        }}
                      >
                        £200
                      </td>
                    </tr>

                    <tr style={{ textAlign: "center" }}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "17px",
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                          borderBottom: "2px solid #97A0B0",
                        }}
                      >
                        Registered Address
                      </td>
                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                          borderBottom: "2px solid #97A0B0",
                        }}
                      >
                        £200
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                          borderBottom: "2px solid #97A0B0",
                        }}
                      >
                        £200
                      </td>

                      <td
                        style={{
                          borderLeft: "2px solid #97A0B0",
                          borderRight: "2px solid #97A0B0",
                          borderBottom: "2px solid #97A0B0",
                        }}
                      >
                        £200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel> */}
          </Tabs>
        </div>
      </Container>
    </>
  );
};
export default PricingPlanNew;
