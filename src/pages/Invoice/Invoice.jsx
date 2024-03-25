import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import SearchIcon from '../../assets/img/search-icon.png'
import InvoicePdf from '../../assets/img/invoice-pdf.jpg'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Invoice = () => {
    const [invoice, setInvoice] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className='main-area' style={{height:"unset"}}>
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />
                    <div className="user-details-page" style={{width:"50%"}}>
                        <div className="ud-inner-section">
                            <div className="udi-area" style={{float:"right"}}>
                                {/* <div className="top-search">
                                    
                                    
                                </div> */}

                                <FormControl sx={{ m: 1, minWidth: 220 }} size="small" style={{background: "#E9F1FE", margin:"20px 0px"}}>
                                    <InputLabel id="demo-select-small-label" style={{color:"black"}}>Invoice Action</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={invoice}
                                        label="invoice action"
                                        onChange={handleChange}
                                        style={{borderRadius:"6px", border:"none"}}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Download PDF</MenuItem>
                                        <MenuItem value={20}>Mark as Draft</MenuItem>
                                        <MenuItem value={30}>Write off invoice</MenuItem>
                                        <MenuItem value={30}>Invoice Settings</MenuItem>
                                    </Select>
                                </FormControl>

                                {/* <button className='btn-user-add'> + Add User</button> */}
                            </div>

                            {/* <img src={CategoryList} alt="" /> */}
                            
                            <img src={InvoicePdf} alt="" style={{ maxWidth: "100%"}} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoice