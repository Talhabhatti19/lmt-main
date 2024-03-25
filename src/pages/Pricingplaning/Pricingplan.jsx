import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PPAIMG from "../../assets/img/PricingPlansSettings.jpg";
const Pricingplan = () => {
  return (
    <>
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className='ds'>
            <img src={PPAIMG} alt="" style={{maxWidth:"95%", margin:"0 2%"}}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pricingplan