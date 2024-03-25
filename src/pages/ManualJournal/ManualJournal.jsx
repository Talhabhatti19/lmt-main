import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ManualJ from "../../assets/img/advactount.jpg";
const ManualJournal = () => {
  return (
    <>
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className='ds'>
            <img src={ManualJ} alt="" style={{width:"50%", margin:"0 2%"}}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default ManualJournal