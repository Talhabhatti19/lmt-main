import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PLIMG from "../../assets/img/Reports-ProfitLoss.jpg";
const ProfitLo = () => {
  return (
    <>
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className='ds'>
            <img src={PLIMG} alt="" style={{maxWidth:"80%", margin:"0 2%"}}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfitLo