import React, { useState, useEffect, useMemo } from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import SearchIcon from '../../assets/img/search-icon.png'
import SettingGaer from '../../assets/img/setting-gaer.png'
import { useNavigate } from 'react-router-dom'
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const UsersDetail = () => {
  const [clientList, setClientList] = useState([])
  const navigate = useNavigate()
  const GetClients = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.clients.getAll()
      if (response.status === 200) {
        let data = response?.data?.data
        setClientList(data)
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    GetClients()
  }, [])
  return (
    <>
      <div className='main-area' style={{ height: "unset" }}>
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="user-details-page">
            <div className="ud-inner-section">
              <div className="udi-area">
                <div className="top-search">
                  <input type="text" className="user-input" placeholder='Search' />
                  <img src={SearchIcon} alt="" />
                </div>

              </div>

              <div className="udi-roles" style={{ display: "flex", justifyContent: "space-between", margin: "1% 3%" }}>
                <div className="top-search-roles" style={{ background: "#E9F1FE" }}>
                  <button style={{ height: "40px", background: "transparent", border: "none", padding: "0px 12px" }}>All</button>
                  <button style={{ height: "40px", background: "transparent", border: "none", padding: "0px 12px" }}>Users</button>
                  <button style={{ height: "40px", background: "transparent", border: "none", padding: "0px 12px" }}>Accountants</button>
                  <button style={{ height: "40px", background: "transparent", border: "none", padding: "0px 12px" }}>Admins</button>
                  <button style={{ height: "40px", background: "transparent", border: "none", padding: "0px 12px" }}>Managers</button>
                </div>

                <div className="addUsers">
                  <button className='btn-user-add' onClick={() => navigate("/adduser")} style={{ height: "40px", background: "#635EFF", border: "none", padding: "0px 12px", borderRadius: "6px", cursor: "pointer", color: "white" }}> + Add User</button>
                </div>
              </div>

              {/* <div className="user-table-details">
                                <div className="top-user-details">
                                    <div className="table-head">
                                        <p>Name</p>
                                        <p>Email</p>
                                        <p>Roles</p>
                                        <p>Date Added</p>
                                    </div>

                                    <div className="table-inner"  >
                                    
                                        
                                        {clientList.map(client => <ul>
                         

                          <li>{client?.first_name}</li>
                          <li>{client?.email}</li>
                          <li>{client?.current_role}</li>
                          <li>{client?.created_at}</li>
                        </ul>)}
                                    </div>

                                    
                                </div>
                            </div> */}


              <TableContainer component={Paper} style={{ padding: "0 37px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" style={{ background: "#E9F1FE" }}>Name</TableCell>
                      <TableCell align="center" style={{ background: "#E9F1FE" }}>Email</TableCell>
                      <TableCell align="center" style={{ background: "#E9F1FE" }}>Roles</TableCell>
                      <TableCell align="center" style={{ background: "#E9F1FE" }}>Date Created</TableCell>
                      <TableCell align="center" style={{ background: "#E9F1FE" }}>Options</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clientList.map((client) => (
                      <TableRow
                        key={client?.id}

                       >
                        <TableCell component="th" scope="row" align="left">
                          {client?.first_name}
                        </TableCell>
                        <TableCell align="center">{client?.email}</TableCell>
                        <TableCell align="center">{client?.current_role}</TableCell>
                        <TableCell align="center">{client?.created_at}</TableCell>
                        <TableCell align="center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <path d="M9.024 17.4867L9.02293 17.4933C8.60393 17.4881 8.19254 17.3285 7.86903 17.0116L7.8645 17.0071L7.85163 16.9942L7.85161 16.9942L6.48176 15.6308L6.33545 15.4852H6.12903H4.17881C3.2583 15.4852 2.51265 14.7397 2.51265 13.8292V11.8881V11.6803L2.36537 11.5337L0.988742 10.1636L0.98732 10.1622C0.341589 9.52467 0.334857 8.47908 0.983405 7.82842L0.992387 7.81947L1.00223 7.80966L1.00224 7.80966L2.36537 6.45291L2.51265 6.30633V6.09853V4.15746C2.51265 3.24701 3.2583 2.5015 4.17881 2.5015H6.12903H6.33545L6.48176 2.35588L7.85838 0.985694C7.85838 0.985693 7.85838 0.985692 7.85839 0.985691C8.17109 0.674454 8.58473 0.5 9.03074 0.5H9.03749C9.47861 0.5 9.89266 0.669123 10.2115 0.980565L11.5865 2.34915L11.7328 2.49477H11.9392H13.8894C14.8099 2.49477 15.5556 3.24029 15.5556 4.15074V6.09181V6.2996L15.7029 6.44619L17.0795 7.81638L17.4322 7.462L17.0795 7.81638C17.3922 8.12757 17.5665 8.53818 17.5665 8.97993C17.5665 9.41931 17.4024 9.8242 17.0959 10.1406L17.0728 10.1636L15.6961 11.5337L15.5488 11.6803V11.8881V13.8292C15.5488 14.7397 14.8032 15.4852 13.8827 15.4852H11.9325H11.726L11.5797 15.6308L10.2031 17.001L10.2031 17.001L10.2003 17.0038C9.88274 17.325 9.45392 17.4867 9.024 17.4867ZM15.503 8.63797L14.3434 7.49041C14.3432 7.49022 14.343 7.49004 14.3428 7.48985C14.0328 7.18099 13.8631 6.77153 13.8631 6.33359V4.70153V4.20153H13.3631H11.73C11.2859 4.20153 10.8776 4.0283 10.5628 3.7209L9.4037 2.56726L9.05099 2.21621L8.69827 2.56726L7.54588 3.71421C7.22667 4.02605 6.81816 4.19567 6.37561 4.20153H4.73891H4.23891V4.70153V6.32687C4.23891 6.76675 4.06579 7.17205 3.75703 7.48526L2.59792 8.639L2.24188 8.99339L2.59793 9.34776L3.75187 10.4963C4.06147 10.8044 4.233 11.2148 4.23891 11.6562V13.2852H4.73216V13.7852H4.73891H5.23891H6.36522C6.8063 13.7852 7.22034 13.9543 7.53913 14.2657L8.69827 15.4194L9.05098 15.7705L9.4037 15.4194L10.5576 14.2709L10.2049 13.9165L10.5576 14.2709C10.8673 13.9627 11.2807 13.7911 11.7264 13.7852H13.3631H13.8631V13.2852V11.6598C13.8631 11.2185 14.0372 10.8071 14.3445 10.4952L15.503 9.34879L15.8622 8.99338L15.503 8.63797ZM9.05099 12.2546C7.23914 12.2546 5.76527 10.7898 5.76527 8.98665C5.76527 7.1829 7.23298 5.71872 9.05099 5.71872C10.869 5.71872 12.3367 7.1829 12.3367 8.98665C12.3367 10.7904 10.869 12.2546 9.05099 12.2546ZM9.05099 7.41875C8.18324 7.41875 7.47803 8.11723 7.47803 8.98665C7.47803 9.85607 8.18324 10.5545 9.05099 10.5545C9.91873 10.5545 10.6239 9.85607 10.6239 8.98665C10.6239 8.11519 9.90993 7.41875 9.05099 7.41875Z" stroke="#84ADEA" />
                          </svg>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersDetail