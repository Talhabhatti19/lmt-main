import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import SearchIcon from '../../assets/img/search-icon.png'
import CategoryList from '../../assets/img/category-list.jpg'

const Category = () => {
  return (
    <>
    <div className='main-area'>
        <div className="sidebar-area">
            <Sidebar />
        </div>
        <div className="dashboardContainer">
            <Navbar />
            <div className="user-details-page">
                <div className="ud-inner-section">
                    <div className="udi-area">
                        <div className="top-search">
                            <input type="text" className="user-input" placeholder='Search Categories....'/>
                            <img src={SearchIcon} alt="" style={{maxWidth: "85%", padding: "0 0 0 2%"}}/>
                        </div>

                        {/* <button className='btn-user-add'> + Add User</button> */}
                    </div>

                    {/* <img src={CategoryList} alt="" /> */}
                    <div style={{display:"flex", marginLeft: "3%", paddingBottom:"1%"}}>
                       
                        <button style={{background: "#635EFF", border: "none", color: "white", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>All</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Transfers</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Client Invoicing</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Supplier Invoicing</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Income</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Cost of Sales</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Expenses</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>People</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Property</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Assets</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Equity</button>
                        <button style={{background: "#E9F1FE", border: "none", color: "black", padding: "10px", margin: "2px", borderRadius: "4px", fontFamily: "Open Sans", cursor:"pointer"}}>Liabilities</button>
                    
                    
                    </div>
                    <img src={CategoryList} alt="" style={{maxWidth: "100%", width: "90%", marginLeft: "3%"}}/>

                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Category