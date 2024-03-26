import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import BSRIMG from "../../assets/img/Reports-BalanceSheet.jpg";

const BalanceSheetR = () => {
  return (
    <>
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className='ds'>
            <img src={BSRIMG} alt="" style={{maxWidth:"78%", margin:"0 2%"}}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default BalanceSheetR