import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const MBO = () => {
  return (
    <>
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className="dividend-abs-page">
            <div className="dabs-inner" style={{ background: "white", margin: "0px 24% 0% 3%", padding: "6px 42px", borderRadius: "10px" }}>
             
              <div className="dabsi-inner">
                <div className="tab-ic-para">
                 
                  <div className="top-divident-section" style={{background:"#F5F6F8", display:"flex", padding:"10px", borderRadius:"10px", margin:"2% 50% 2% 0%"}}>
                  <svg width="100" height="100" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M58.1279 34.9748C60.365 20.1119 50.0729 6.25813 35.1399 4.03155C20.2068 1.80497 6.28768 12.0487 4.0506 26.9116C1.81351 41.7745 12.1056 55.6282 27.0387 57.8548C41.9717 60.0814 55.8908 49.8377 58.1279 34.9748Z" fill="#E9F1FE" />
                          <g clip-path="url(#clip0_1048_242)">
                            <path d="M41.3333 26H27.6667C27.4826 26 27.3333 26.1492 27.3333 26.3333C27.3333 26.5174 27.4826 26.6667 27.6667 26.6667H29.6817C28.2024 27.608 27.3143 29.2467 27.3333 31C27.3143 32.7533 28.2024 34.392 29.6817 35.3333H22.6667V26.6667H26C26.1841 26.6667 26.3333 26.5174 26.3333 26.3333C26.3333 26.1492 26.1841 26 26 26H22.6667C22.2985 26 22 26.2985 22 26.6667V35.3333C22 35.7015 22.2985 36 22.6667 36H41.3333C41.7015 36 42 35.7015 42 35.3333V26.6667C42 26.2985 41.7015 26 41.3333 26ZM28 31C28 28.6107 29.7943 26.6667 32 26.6667C34.2057 26.6667 36 28.6107 36 31C36 33.3893 34.2057 35.3333 32 35.3333C29.7943 35.3333 28 33.3893 28 31ZM41.3333 35.3333H34.3183C35.7976 34.392 36.6857 32.7533 36.6667 31C36.6857 29.2467 35.7976 27.608 34.3183 26.6667H41.3333V35.3333Z" fill="#635EFF" />
                            <path d="M39.5781 22.4033C39.4203 22.3243 39.2376 22.3111 39.0701 22.3666L31.8901 24.7729C31.7152 24.8315 31.6209 25.0207 31.6795 25.1956C31.738 25.3705 31.9272 25.4648 32.1021 25.4063L39.2801 22.9999L40.0168 25.1963C40.0546 25.3094 40.1499 25.3938 40.2668 25.4176C40.3837 25.4414 40.5044 25.4011 40.5835 25.3117C40.6625 25.2224 40.6879 25.0977 40.6501 24.9846L39.9131 22.7896C39.8582 22.6209 39.7374 22.4815 39.5781 22.4033Z" fill="#635EFF" />
                            <path d="M31.8973 36.5939L24.7193 38.9999L23.9827 36.8036C23.9242 36.6287 23.7351 36.5343 23.5602 36.5927C23.3853 36.6512 23.2909 36.8404 23.3493 37.0152L24.085 39.2096C24.1395 39.378 24.2597 39.5173 24.4183 39.5959C24.5106 39.6418 24.6123 39.6658 24.7153 39.6659C24.787 39.666 24.8582 39.6548 24.9263 39.6326L32.1063 37.2262C32.2812 37.1677 32.3755 36.9785 32.317 36.8036C32.2585 36.6287 32.0692 36.5344 31.8943 36.5929L31.8973 36.5939Z" fill="#635EFF" />
                            <path d="M33.0007 29.8333C33.0007 30.0174 33.1499 30.1667 33.334 30.1667C33.5181 30.1667 33.6673 30.0174 33.6673 29.8333C33.6351 29.0861 33.0745 28.4682 32.334 28.3637V28.3333C32.334 28.1492 32.1847 28 32.0007 28C31.8166 28 31.6673 28.1492 31.6673 28.3333V28.3637C30.9268 28.4682 30.3662 29.0861 30.334 29.8333C30.3662 30.5805 30.9268 31.1985 31.6673 31.303V32.9487C31.2964 32.8645 31.0251 32.5463 31.0007 32.1667C31.0007 31.9826 30.8514 31.8333 30.6673 31.8333C30.4832 31.8333 30.334 31.9826 30.334 32.1667C30.3662 32.9139 30.9268 33.5318 31.6673 33.6363V33.6667C31.6673 33.8508 31.8166 34 32.0007 34C32.1847 34 32.334 33.8508 32.334 33.6667V33.6363C33.0745 33.5318 33.6351 32.9139 33.6673 32.1667C33.6351 31.4195 33.0745 30.8015 32.334 30.697V29.0513C32.7049 29.1355 32.9762 29.4537 33.0007 29.8333ZM31.0007 29.8333C31.0251 29.4537 31.2964 29.1355 31.6673 29.0513V30.6153C31.2964 30.5312 31.0251 30.2129 31.0007 29.8333ZM33.0007 32.1667C32.9762 32.5463 32.7049 32.8645 32.334 32.9487V31.3847C32.7049 31.4688 32.9762 31.7871 33.0007 32.1667Z" fill="#635EFF" />
                            <path d="M38.9993 34.6665H40.3327C40.5168 34.6665 40.666 34.5173 40.666 34.3332V32.9998C40.666 32.8157 40.5168 32.6665 40.3327 32.6665C40.1486 32.6665 39.9993 32.8157 39.9993 32.9998V33.9998H38.9993C38.8153 33.9998 38.666 34.1491 38.666 34.3332C38.666 34.5173 38.8153 34.6665 38.9993 34.6665Z" fill="#635EFF" />
                            <path d="M23.6673 32.6665C23.4832 32.6665 23.334 32.8157 23.334 32.9998V34.3332C23.334 34.5173 23.4832 34.6665 23.6673 34.6665H25.0007C25.1847 34.6665 25.334 34.5173 25.334 34.3332C25.334 34.1491 25.1847 33.9998 25.0007 33.9998H24.0007V32.9998C24.0007 32.8157 23.8514 32.6665 23.6673 32.6665Z" fill="#635EFF" />
                            <path d="M25.0007 27.3333H23.6673C23.4832 27.3333 23.334 27.4825 23.334 27.6666V28.9999C23.334 29.184 23.4832 29.3333 23.6673 29.3333C23.8514 29.3333 24.0007 29.184 24.0007 28.9999V27.9999H25.0007C25.1847 27.9999 25.334 27.8507 25.334 27.6666C25.334 27.4825 25.1847 27.3333 25.0007 27.3333Z" fill="#635EFF" />
                            <path d="M38.9993 27.9999H39.9993V28.9999C39.9993 29.184 40.1486 29.3333 40.3327 29.3333C40.5168 29.3333 40.666 29.184 40.666 28.9999V27.6666C40.666 27.4825 40.5168 27.3333 40.3327 27.3333H38.9993C38.8153 27.3333 38.666 27.4825 38.666 27.6666C38.666 27.8507 38.8153 27.9999 38.9993 27.9999Z" fill="#635EFF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1048_242">
                              <rect width="20" height="20" fill="white" transform="translate(22 21)" />
                            </clipPath>
                          </defs>
                        </svg>

                    <div className="inner-dsi-section" style={{paddingLeft:"30px"}}>
                      <p>Total Outstanding</p>
                      <p style={{fontSize:"20px", fontWeight:"bold"}}>£448.96</p>
                    </div>
                  </div>

                  <div className="tab-inner-listing">
                  <p style={{fontSize:"20px", fontWeight:"bold"}}>Outstanding sales invoices</p>
                    <div className="til" style={{ display: "flex", alignItem: "center" }}>
                      <div className="til-img">
                        <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M58.1279 34.9748C60.365 20.1119 50.0729 6.25813 35.1399 4.03155C20.2068 1.80497 6.28768 12.0487 4.0506 26.9116C1.81351 41.7745 12.1056 55.6282 27.0387 57.8548C41.9717 60.0814 55.8908 49.8377 58.1279 34.9748Z" fill="#E9F1FE" />
                          <g clip-path="url(#clip0_1048_242)">
                            <path d="M41.3333 26H27.6667C27.4826 26 27.3333 26.1492 27.3333 26.3333C27.3333 26.5174 27.4826 26.6667 27.6667 26.6667H29.6817C28.2024 27.608 27.3143 29.2467 27.3333 31C27.3143 32.7533 28.2024 34.392 29.6817 35.3333H22.6667V26.6667H26C26.1841 26.6667 26.3333 26.5174 26.3333 26.3333C26.3333 26.1492 26.1841 26 26 26H22.6667C22.2985 26 22 26.2985 22 26.6667V35.3333C22 35.7015 22.2985 36 22.6667 36H41.3333C41.7015 36 42 35.7015 42 35.3333V26.6667C42 26.2985 41.7015 26 41.3333 26ZM28 31C28 28.6107 29.7943 26.6667 32 26.6667C34.2057 26.6667 36 28.6107 36 31C36 33.3893 34.2057 35.3333 32 35.3333C29.7943 35.3333 28 33.3893 28 31ZM41.3333 35.3333H34.3183C35.7976 34.392 36.6857 32.7533 36.6667 31C36.6857 29.2467 35.7976 27.608 34.3183 26.6667H41.3333V35.3333Z" fill="#635EFF" />
                            <path d="M39.5781 22.4033C39.4203 22.3243 39.2376 22.3111 39.0701 22.3666L31.8901 24.7729C31.7152 24.8315 31.6209 25.0207 31.6795 25.1956C31.738 25.3705 31.9272 25.4648 32.1021 25.4063L39.2801 22.9999L40.0168 25.1963C40.0546 25.3094 40.1499 25.3938 40.2668 25.4176C40.3837 25.4414 40.5044 25.4011 40.5835 25.3117C40.6625 25.2224 40.6879 25.0977 40.6501 24.9846L39.9131 22.7896C39.8582 22.6209 39.7374 22.4815 39.5781 22.4033Z" fill="#635EFF" />
                            <path d="M31.8973 36.5939L24.7193 38.9999L23.9827 36.8036C23.9242 36.6287 23.7351 36.5343 23.5602 36.5927C23.3853 36.6512 23.2909 36.8404 23.3493 37.0152L24.085 39.2096C24.1395 39.378 24.2597 39.5173 24.4183 39.5959C24.5106 39.6418 24.6123 39.6658 24.7153 39.6659C24.787 39.666 24.8582 39.6548 24.9263 39.6326L32.1063 37.2262C32.2812 37.1677 32.3755 36.9785 32.317 36.8036C32.2585 36.6287 32.0692 36.5344 31.8943 36.5929L31.8973 36.5939Z" fill="#635EFF" />
                            <path d="M33.0007 29.8333C33.0007 30.0174 33.1499 30.1667 33.334 30.1667C33.5181 30.1667 33.6673 30.0174 33.6673 29.8333C33.6351 29.0861 33.0745 28.4682 32.334 28.3637V28.3333C32.334 28.1492 32.1847 28 32.0007 28C31.8166 28 31.6673 28.1492 31.6673 28.3333V28.3637C30.9268 28.4682 30.3662 29.0861 30.334 29.8333C30.3662 30.5805 30.9268 31.1985 31.6673 31.303V32.9487C31.2964 32.8645 31.0251 32.5463 31.0007 32.1667C31.0007 31.9826 30.8514 31.8333 30.6673 31.8333C30.4832 31.8333 30.334 31.9826 30.334 32.1667C30.3662 32.9139 30.9268 33.5318 31.6673 33.6363V33.6667C31.6673 33.8508 31.8166 34 32.0007 34C32.1847 34 32.334 33.8508 32.334 33.6667V33.6363C33.0745 33.5318 33.6351 32.9139 33.6673 32.1667C33.6351 31.4195 33.0745 30.8015 32.334 30.697V29.0513C32.7049 29.1355 32.9762 29.4537 33.0007 29.8333ZM31.0007 29.8333C31.0251 29.4537 31.2964 29.1355 31.6673 29.0513V30.6153C31.2964 30.5312 31.0251 30.2129 31.0007 29.8333ZM33.0007 32.1667C32.9762 32.5463 32.7049 32.8645 32.334 32.9487V31.3847C32.7049 31.4688 32.9762 31.7871 33.0007 32.1667Z" fill="#635EFF" />
                            <path d="M38.9993 34.6665H40.3327C40.5168 34.6665 40.666 34.5173 40.666 34.3332V32.9998C40.666 32.8157 40.5168 32.6665 40.3327 32.6665C40.1486 32.6665 39.9993 32.8157 39.9993 32.9998V33.9998H38.9993C38.8153 33.9998 38.666 34.1491 38.666 34.3332C38.666 34.5173 38.8153 34.6665 38.9993 34.6665Z" fill="#635EFF" />
                            <path d="M23.6673 32.6665C23.4832 32.6665 23.334 32.8157 23.334 32.9998V34.3332C23.334 34.5173 23.4832 34.6665 23.6673 34.6665H25.0007C25.1847 34.6665 25.334 34.5173 25.334 34.3332C25.334 34.1491 25.1847 33.9998 25.0007 33.9998H24.0007V32.9998C24.0007 32.8157 23.8514 32.6665 23.6673 32.6665Z" fill="#635EFF" />
                            <path d="M25.0007 27.3333H23.6673C23.4832 27.3333 23.334 27.4825 23.334 27.6666V28.9999C23.334 29.184 23.4832 29.3333 23.6673 29.3333C23.8514 29.3333 24.0007 29.184 24.0007 28.9999V27.9999H25.0007C25.1847 27.9999 25.334 27.8507 25.334 27.6666C25.334 27.4825 25.1847 27.3333 25.0007 27.3333Z" fill="#635EFF" />
                            <path d="M38.9993 27.9999H39.9993V28.9999C39.9993 29.184 40.1486 29.3333 40.3327 29.3333C40.5168 29.3333 40.666 29.184 40.666 28.9999V27.6666C40.666 27.4825 40.5168 27.3333 40.3327 27.3333H38.9993C38.8153 27.3333 38.666 27.4825 38.666 27.6666C38.666 27.8507 38.8153 27.9999 38.9993 27.9999Z" fill="#635EFF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1048_242">
                              <rect width="20" height="20" fill="white" transform="translate(22 21)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div className="til-des" style={{ lineHeight: "1", marginLeft: "25px" }}>
                        <p style={{ fontWeight: "bold" }}>Invoice # 1 - Emerj</p>
                        <p>28th February 2023</p>
                        <p>Total outstanding from clients:</p>
                      </div>

                      <div className="til-price" style={{ position: "relative", left: "50%" }}>
                        <p>£100.00</p>
                        <p>£100.00</p>
                      </div>
                    </div>

                    <p style={{fontSize:"20px", fontWeight:"bold", margin:"0"}}>Taxes</p>
                    <div className="til" style={{ display: "flex", alignItem: "center" }}>
                      <div className="til-img">
                        <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M58.1279 34.9748C60.365 20.1119 50.0729 6.25813 35.1399 4.03155C20.2068 1.80497 6.28768 12.0487 4.0506 26.9116C1.81351 41.7745 12.1056 55.6282 27.0387 57.8548C41.9717 60.0814 55.8908 49.8377 58.1279 34.9748Z" fill="#E9F1FE" />
                          <g clip-path="url(#clip0_1048_242)">
                            <path d="M41.3333 26H27.6667C27.4826 26 27.3333 26.1492 27.3333 26.3333C27.3333 26.5174 27.4826 26.6667 27.6667 26.6667H29.6817C28.2024 27.608 27.3143 29.2467 27.3333 31C27.3143 32.7533 28.2024 34.392 29.6817 35.3333H22.6667V26.6667H26C26.1841 26.6667 26.3333 26.5174 26.3333 26.3333C26.3333 26.1492 26.1841 26 26 26H22.6667C22.2985 26 22 26.2985 22 26.6667V35.3333C22 35.7015 22.2985 36 22.6667 36H41.3333C41.7015 36 42 35.7015 42 35.3333V26.6667C42 26.2985 41.7015 26 41.3333 26ZM28 31C28 28.6107 29.7943 26.6667 32 26.6667C34.2057 26.6667 36 28.6107 36 31C36 33.3893 34.2057 35.3333 32 35.3333C29.7943 35.3333 28 33.3893 28 31ZM41.3333 35.3333H34.3183C35.7976 34.392 36.6857 32.7533 36.6667 31C36.6857 29.2467 35.7976 27.608 34.3183 26.6667H41.3333V35.3333Z" fill="#635EFF" />
                            <path d="M39.5781 22.4033C39.4203 22.3243 39.2376 22.3111 39.0701 22.3666L31.8901 24.7729C31.7152 24.8315 31.6209 25.0207 31.6795 25.1956C31.738 25.3705 31.9272 25.4648 32.1021 25.4063L39.2801 22.9999L40.0168 25.1963C40.0546 25.3094 40.1499 25.3938 40.2668 25.4176C40.3837 25.4414 40.5044 25.4011 40.5835 25.3117C40.6625 25.2224 40.6879 25.0977 40.6501 24.9846L39.9131 22.7896C39.8582 22.6209 39.7374 22.4815 39.5781 22.4033Z" fill="#635EFF" />
                            <path d="M31.8973 36.5939L24.7193 38.9999L23.9827 36.8036C23.9242 36.6287 23.7351 36.5343 23.5602 36.5927C23.3853 36.6512 23.2909 36.8404 23.3493 37.0152L24.085 39.2096C24.1395 39.378 24.2597 39.5173 24.4183 39.5959C24.5106 39.6418 24.6123 39.6658 24.7153 39.6659C24.787 39.666 24.8582 39.6548 24.9263 39.6326L32.1063 37.2262C32.2812 37.1677 32.3755 36.9785 32.317 36.8036C32.2585 36.6287 32.0692 36.5344 31.8943 36.5929L31.8973 36.5939Z" fill="#635EFF" />
                            <path d="M33.0007 29.8333C33.0007 30.0174 33.1499 30.1667 33.334 30.1667C33.5181 30.1667 33.6673 30.0174 33.6673 29.8333C33.6351 29.0861 33.0745 28.4682 32.334 28.3637V28.3333C32.334 28.1492 32.1847 28 32.0007 28C31.8166 28 31.6673 28.1492 31.6673 28.3333V28.3637C30.9268 28.4682 30.3662 29.0861 30.334 29.8333C30.3662 30.5805 30.9268 31.1985 31.6673 31.303V32.9487C31.2964 32.8645 31.0251 32.5463 31.0007 32.1667C31.0007 31.9826 30.8514 31.8333 30.6673 31.8333C30.4832 31.8333 30.334 31.9826 30.334 32.1667C30.3662 32.9139 30.9268 33.5318 31.6673 33.6363V33.6667C31.6673 33.8508 31.8166 34 32.0007 34C32.1847 34 32.334 33.8508 32.334 33.6667V33.6363C33.0745 33.5318 33.6351 32.9139 33.6673 32.1667C33.6351 31.4195 33.0745 30.8015 32.334 30.697V29.0513C32.7049 29.1355 32.9762 29.4537 33.0007 29.8333ZM31.0007 29.8333C31.0251 29.4537 31.2964 29.1355 31.6673 29.0513V30.6153C31.2964 30.5312 31.0251 30.2129 31.0007 29.8333ZM33.0007 32.1667C32.9762 32.5463 32.7049 32.8645 32.334 32.9487V31.3847C32.7049 31.4688 32.9762 31.7871 33.0007 32.1667Z" fill="#635EFF" />
                            <path d="M38.9993 34.6665H40.3327C40.5168 34.6665 40.666 34.5173 40.666 34.3332V32.9998C40.666 32.8157 40.5168 32.6665 40.3327 32.6665C40.1486 32.6665 39.9993 32.8157 39.9993 32.9998V33.9998H38.9993C38.8153 33.9998 38.666 34.1491 38.666 34.3332C38.666 34.5173 38.8153 34.6665 38.9993 34.6665Z" fill="#635EFF" />
                            <path d="M23.6673 32.6665C23.4832 32.6665 23.334 32.8157 23.334 32.9998V34.3332C23.334 34.5173 23.4832 34.6665 23.6673 34.6665H25.0007C25.1847 34.6665 25.334 34.5173 25.334 34.3332C25.334 34.1491 25.1847 33.9998 25.0007 33.9998H24.0007V32.9998C24.0007 32.8157 23.8514 32.6665 23.6673 32.6665Z" fill="#635EFF" />
                            <path d="M25.0007 27.3333H23.6673C23.4832 27.3333 23.334 27.4825 23.334 27.6666V28.9999C23.334 29.184 23.4832 29.3333 23.6673 29.3333C23.8514 29.3333 24.0007 29.184 24.0007 28.9999V27.9999H25.0007C25.1847 27.9999 25.334 27.8507 25.334 27.6666C25.334 27.4825 25.1847 27.3333 25.0007 27.3333Z" fill="#635EFF" />
                            <path d="M38.9993 27.9999H39.9993V28.9999C39.9993 29.184 40.1486 29.3333 40.3327 29.3333C40.5168 29.3333 40.666 29.184 40.666 28.9999V27.6666C40.666 27.4825 40.5168 27.3333 40.3327 27.3333H38.9993C38.8153 27.3333 38.666 27.4825 38.666 27.6666C38.666 27.8507 38.8153 27.9999 38.9993 27.9999Z" fill="#635EFF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1048_242">
                              <rect width="20" height="20" fill="white" transform="translate(22 21)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div className="til-des" style={{ lineHeight: "1", marginLeft: "25px" }}>
                        <p style={{ fontWeight: "bold" }}>IVAT owed to the business</p>
                        <p>Total taxes owed to the business:</p>
                      </div>

                      <div className="til-price" style={{ position: "relative", left: "48%" }}>
                        <p>£328.96</p>
                        <p>£328.96</p>
                      </div>
                    </div>

                    <p style={{fontSize:"20px", fontWeight:"bold", margin:"0"}}>Other</p>
                    <div className="til" style={{ display: "flex", alignItem: "center" }}>
                      <div className="til-img">
                        <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M58.1279 34.9748C60.365 20.1119 50.0729 6.25813 35.1399 4.03155C20.2068 1.80497 6.28768 12.0487 4.0506 26.9116C1.81351 41.7745 12.1056 55.6282 27.0387 57.8548C41.9717 60.0814 55.8908 49.8377 58.1279 34.9748Z" fill="#E9F1FE" />
                          <g clip-path="url(#clip0_1048_242)">
                            <path d="M41.3333 26H27.6667C27.4826 26 27.3333 26.1492 27.3333 26.3333C27.3333 26.5174 27.4826 26.6667 27.6667 26.6667H29.6817C28.2024 27.608 27.3143 29.2467 27.3333 31C27.3143 32.7533 28.2024 34.392 29.6817 35.3333H22.6667V26.6667H26C26.1841 26.6667 26.3333 26.5174 26.3333 26.3333C26.3333 26.1492 26.1841 26 26 26H22.6667C22.2985 26 22 26.2985 22 26.6667V35.3333C22 35.7015 22.2985 36 22.6667 36H41.3333C41.7015 36 42 35.7015 42 35.3333V26.6667C42 26.2985 41.7015 26 41.3333 26ZM28 31C28 28.6107 29.7943 26.6667 32 26.6667C34.2057 26.6667 36 28.6107 36 31C36 33.3893 34.2057 35.3333 32 35.3333C29.7943 35.3333 28 33.3893 28 31ZM41.3333 35.3333H34.3183C35.7976 34.392 36.6857 32.7533 36.6667 31C36.6857 29.2467 35.7976 27.608 34.3183 26.6667H41.3333V35.3333Z" fill="#635EFF" />
                            <path d="M39.5781 22.4033C39.4203 22.3243 39.2376 22.3111 39.0701 22.3666L31.8901 24.7729C31.7152 24.8315 31.6209 25.0207 31.6795 25.1956C31.738 25.3705 31.9272 25.4648 32.1021 25.4063L39.2801 22.9999L40.0168 25.1963C40.0546 25.3094 40.1499 25.3938 40.2668 25.4176C40.3837 25.4414 40.5044 25.4011 40.5835 25.3117C40.6625 25.2224 40.6879 25.0977 40.6501 24.9846L39.9131 22.7896C39.8582 22.6209 39.7374 22.4815 39.5781 22.4033Z" fill="#635EFF" />
                            <path d="M31.8973 36.5939L24.7193 38.9999L23.9827 36.8036C23.9242 36.6287 23.7351 36.5343 23.5602 36.5927C23.3853 36.6512 23.2909 36.8404 23.3493 37.0152L24.085 39.2096C24.1395 39.378 24.2597 39.5173 24.4183 39.5959C24.5106 39.6418 24.6123 39.6658 24.7153 39.6659C24.787 39.666 24.8582 39.6548 24.9263 39.6326L32.1063 37.2262C32.2812 37.1677 32.3755 36.9785 32.317 36.8036C32.2585 36.6287 32.0692 36.5344 31.8943 36.5929L31.8973 36.5939Z" fill="#635EFF" />
                            <path d="M33.0007 29.8333C33.0007 30.0174 33.1499 30.1667 33.334 30.1667C33.5181 30.1667 33.6673 30.0174 33.6673 29.8333C33.6351 29.0861 33.0745 28.4682 32.334 28.3637V28.3333C32.334 28.1492 32.1847 28 32.0007 28C31.8166 28 31.6673 28.1492 31.6673 28.3333V28.3637C30.9268 28.4682 30.3662 29.0861 30.334 29.8333C30.3662 30.5805 30.9268 31.1985 31.6673 31.303V32.9487C31.2964 32.8645 31.0251 32.5463 31.0007 32.1667C31.0007 31.9826 30.8514 31.8333 30.6673 31.8333C30.4832 31.8333 30.334 31.9826 30.334 32.1667C30.3662 32.9139 30.9268 33.5318 31.6673 33.6363V33.6667C31.6673 33.8508 31.8166 34 32.0007 34C32.1847 34 32.334 33.8508 32.334 33.6667V33.6363C33.0745 33.5318 33.6351 32.9139 33.6673 32.1667C33.6351 31.4195 33.0745 30.8015 32.334 30.697V29.0513C32.7049 29.1355 32.9762 29.4537 33.0007 29.8333ZM31.0007 29.8333C31.0251 29.4537 31.2964 29.1355 31.6673 29.0513V30.6153C31.2964 30.5312 31.0251 30.2129 31.0007 29.8333ZM33.0007 32.1667C32.9762 32.5463 32.7049 32.8645 32.334 32.9487V31.3847C32.7049 31.4688 32.9762 31.7871 33.0007 32.1667Z" fill="#635EFF" />
                            <path d="M38.9993 34.6665H40.3327C40.5168 34.6665 40.666 34.5173 40.666 34.3332V32.9998C40.666 32.8157 40.5168 32.6665 40.3327 32.6665C40.1486 32.6665 39.9993 32.8157 39.9993 32.9998V33.9998H38.9993C38.8153 33.9998 38.666 34.1491 38.666 34.3332C38.666 34.5173 38.8153 34.6665 38.9993 34.6665Z" fill="#635EFF" />
                            <path d="M23.6673 32.6665C23.4832 32.6665 23.334 32.8157 23.334 32.9998V34.3332C23.334 34.5173 23.4832 34.6665 23.6673 34.6665H25.0007C25.1847 34.6665 25.334 34.5173 25.334 34.3332C25.334 34.1491 25.1847 33.9998 25.0007 33.9998H24.0007V32.9998C24.0007 32.8157 23.8514 32.6665 23.6673 32.6665Z" fill="#635EFF" />
                            <path d="M25.0007 27.3333H23.6673C23.4832 27.3333 23.334 27.4825 23.334 27.6666V28.9999C23.334 29.184 23.4832 29.3333 23.6673 29.3333C23.8514 29.3333 24.0007 29.184 24.0007 28.9999V27.9999H25.0007C25.1847 27.9999 25.334 27.8507 25.334 27.6666C25.334 27.4825 25.1847 27.3333 25.0007 27.3333Z" fill="#635EFF" />
                            <path d="M38.9993 27.9999H39.9993V28.9999C39.9993 29.184 40.1486 29.3333 40.3327 29.3333C40.5168 29.3333 40.666 29.184 40.666 28.9999V27.6666C40.666 27.4825 40.5168 27.3333 40.3327 27.3333H38.9993C38.8153 27.3333 38.666 27.4825 38.666 27.6666C38.666 27.8507 38.8153 27.9999 38.9993 27.9999Z" fill="#635EFF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1048_242">
                              <rect width="20" height="20" fill="white" transform="translate(22 21)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <div className="til-des" style={{ lineHeight: "1", marginLeft: "25px" }}>
                        <p style={{ fontWeight: "bold" }}>Money Owed to You from Clients</p>
                        <p>Total other amounts owed to the business:</p>
                      </div>

                      <div className="til-price" style={{ position: "relative", left: "40%" }}>
                        <p>£20.00</p>
                        <p>£20.00</p>
                      </div>
                    </div>

                    <div className="total-bottom" style={{display:"flex", justifyContent:"space-between"}}>
                    <p>Total outstanding:</p>
                    <p style={{marginRight:"5%"}}>£448.96</p>
                    </div>

                  

                  </div>

                </div>
              </div>
            </div>
          </div>
      
      </div>
    </div>
    </>
  )
}

export default MBO