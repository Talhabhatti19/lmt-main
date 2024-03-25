import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { Button, MenuItem, Select } from '@mui/material';
import { date } from 'yup';
import { Formik, Form, Field } from "formik";


const SalesDetail = () => {
  let sum = 0;
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [clientList, setClientList] = useState(null)
  const [products, setProducts] = useState(null)
  const [data, setData] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState([])
  const [total, setTotal] = useState(0);
  console.log('location', location?.state)

  // Function to fetch sales data by ID
  const getSalesById = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.sales.getSalesById(id);
      if (response.status === 200) {
        let data = response?.data?.data;
        setDetail(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };
  const getProducts = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.products.getAll();
      if (response.status === 200) {
        let data = response?.data?.data;
        setProducts(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };
  //Clients get api
  const GetClients = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.clients.getClientById(id)
      if (response.status === 200) {
        let data = response?.data?.data
        console.log(data)
        setClientList(data)
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  const totalSum = () => {
    sum = 0;
    products?.map?.(product => {
      if (selectedProducts?.includes?.(product?.id)) {
        sum = parseInt(sum) + parseInt(product.price)
      }
    })
    console.log("sum here", sum)
    // setTotal(sum)
    return sum
  }
  const editData = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.sales(id)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      navigate('/sales')
    }
    else showAlert.failure(response?.data?.message)
  }
  // Fetch sales data when the component mounts
  useEffect(() => {
    getSalesById(id);
    getProducts()
    GetClients()
  }, []);
  console.log("setSelectedProducts", selectedProducts)
  console.log("products", products)
  function handleSubmit() {
    let data = new FormData();
    data.append('name', 'Invoices for5Client 41' + Math.random(10));
    data.append('invoice_for_user_id', id);
    data.append('type', 'Invoice');
    data.append('issue_date', '2023-11-15');
    data.append('due_date', '2023-11-30');
    data.append('dated', '2023-11-22');
    data.append('status', 'Pending');
    data.append('vat_rate', '200');
    data.append('vat_type', 'reduced_rate');
    data.append('category_list_items', '[]');
    data.append('product_or_services', `[${selectedProducts}]`);
    data.append('amount', sum);
    LAMT_API.endpoints.clientAdmin.sales.addSales(data).then(res => {
      console.log("res after adding invoic", res);
      if (res.status === 200) {
        navigate('/sales')
      } else {
        alert("Opps!! Something bad has happened.")
      }
    })
  }
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="expenses-section">
            <div className="es-area" style={{margin:"0 3% 0 3%"}}>
              <div className="es-inner">

                <div className="sales-invoice" >
                  <div className="inner-sale-invoice">
                    <div className="start-invoice">
                      <Formik>
                        <Form>
                        <div className="top-heading-invoice">
                        <div className="top-select-sales">
                          <div className="itss" style={{display:"flex", alignItems:"center", padding:"15px"}}>
                            <svg width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M58.1279 34.9748C60.365 20.1119 50.0729 6.25813 35.1399 4.03155C20.2068 1.80497 6.28768 12.0487 4.0506 26.9116C1.81351 41.7745 12.1056 55.6282 27.0387 57.8548C41.9717 60.0814 55.8908 49.8377 58.1279 34.9748Z" fill="#E9F1FE" />
                              <g clip-path="url(#clip0_1156_444)">
                                <path d="M37.8136 33.0357C37.7478 32.9655 37.6812 32.8958 37.6129 32.8275C36.4503 31.6649 35.0255 30.8599 33.4719 30.4672C35.1144 29.6483 36.2455 27.9512 36.2455 25.9946C36.2455 23.2405 34.0049 21 31.2509 21C28.4969 21 26.2564 23.2405 26.2564 25.9945C26.2564 27.9511 27.3875 29.6483 29.03 30.4672C27.4764 30.8599 26.0516 31.6649 24.8891 32.8275C23.1898 34.5268 22.2539 36.7861 22.2539 39.1893C22.2539 39.4094 22.4323 39.5877 22.6523 39.5877H34.7254C35.4565 40.4509 36.5477 41 37.7648 41C39.9607 41 41.7473 39.2135 41.7473 37.0175C41.7473 34.8379 39.9871 33.0619 37.8136 33.0357ZM27.0532 25.9945C27.0532 23.6799 28.9363 21.7968 31.2509 21.7968C33.5655 21.7968 35.4486 23.6799 35.4486 25.9945C35.4486 28.3091 33.5655 30.1923 31.2509 30.1923C28.9363 30.1923 27.0532 28.3092 27.0532 25.9945ZM23.0602 38.7909C23.2688 34.4536 26.8629 30.9891 31.2509 30.9891C33.3875 30.9891 35.3356 31.8107 36.7965 33.1543C35.067 33.588 33.7823 35.1555 33.7823 37.0175C33.7823 37.6543 33.9328 38.2566 34.1997 38.7909H23.0602V38.7909ZM37.7648 40.2032C36.0082 40.2032 34.5791 38.7741 34.5791 37.0175C34.5791 35.261 36.0082 33.8319 37.7648 33.8319C39.5214 33.8319 40.9505 35.261 40.9505 37.0175C40.9505 38.7741 39.5214 40.2032 37.7648 40.2032Z" fill="#635EFF" />
                                <path d="M27.9537 32.8811C27.8408 32.6922 27.5962 32.6306 27.4073 32.7434C25.6808 33.7749 24.4223 35.4831 23.9545 37.43C23.9031 37.644 24.0348 37.859 24.2488 37.9104C24.2801 37.918 24.3114 37.9216 24.3422 37.9216C24.5221 37.9216 24.6854 37.7988 24.7292 37.6161C25.1473 35.8764 26.2724 34.3497 27.816 33.4275C28.0048 33.3146 28.0665 33.07 27.9537 32.8811Z" fill="#635EFF" />
                                <path d="M31.2505 31.686C30.6631 31.686 30.078 31.7542 29.5116 31.8887C29.2975 31.9394 29.1651 32.1542 29.2159 32.3683C29.2594 32.5515 29.4228 32.6748 29.6032 32.6748C29.6337 32.6748 29.6646 32.6713 29.6955 32.6639C30.2018 32.5438 30.725 32.4828 31.2505 32.4828C31.4705 32.4828 31.6489 32.3045 31.6489 32.0844C31.6489 31.8644 31.4705 31.686 31.2505 31.686Z" fill="#635EFF" />
                                <path d="M39.4058 36.6912H38.1677V35.4531C38.1677 35.233 37.9893 35.0547 37.7693 35.0547C37.5493 35.0547 37.3709 35.233 37.3709 35.4531V36.6912H36.1328C35.9128 36.6912 35.7344 36.8696 35.7344 37.0896C35.7344 37.3096 35.9128 37.488 36.1328 37.488H37.3709V38.7262C37.3709 38.9462 37.5493 39.1246 37.7693 39.1246C37.9893 39.1246 38.1677 38.9462 38.1677 38.7262V37.488H39.4058C39.6258 37.488 39.8042 37.3096 39.8042 37.0896C39.8042 36.8696 39.6258 36.6912 39.4058 36.6912Z" fill="#635EFF" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1156_444">
                                  <rect width="20" height="20" fill="white" transform="translate(22 21)" />
                                </clipPath>
                              </defs>
                            </svg>

                           <div className="itsd" style={{lineHeight:"0.8", paddingLeft:"30px"}}>
                           <h2>{clientList?.first_name}</h2>
                           <p>{clientList?.email}</p>
                           </div>

                          </div>

                       
                          <div className="pefi-area-main" style={{display:"flex", justifyContent:"space-between", padding:"15px 30px"}}>
                      
                          <div className="pefi-area" style={{width:"100%"}}>
                        <div className="labels">
                          <label htmlFor="description">Date of Invoice</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="issue_date"
                            name="issue_date"
                            placeholder="10th May 2023"
                            style={{width:"100%", background:"#F5F6F8", border:"none", padding:"15px 10px", borderRadius:"6px", margin:"10px 0px"}}
                          />
                          <span style={{fontSize:"14px"}}>* Some days are disabled as you have finalised periods</span>
                        </div>
                      </div>
                      <div className="pefi-area" style={{width:"100%", margin:"0 20px"}}>
                        <div className="labels">
                          <label htmlFor="description">Due Date</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="due_date"
                            name="due_date"
                            placeholder="9th June 2023"
                            style={{width:"100%", background:"#F5F6F8", border:"none", padding:"15px 10px", borderRadius:"6px", margin:"10px 0px"}}
                          />
                        </div>
                      </div>

                      <div className="pefi-area" style={{width:"100%"}}>
                        <div className="labels">
                          <label htmlFor="description">What is the default currency for this client? *</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="description"
                            name="description"
                            placeholder="£"
                            style={{width:"100%", background:"#F5F6F8", border:"none", padding:"15px 10px", borderRadius:"6px", margin:"10px 0px"}}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pefi-area-main" style={{display:"flex", justifyContent:"space-between", padding:"15px 30px"}}>
                      
                      <div className="pefi-area" style={{width:"100%"}}>
                    <div className="labels">
                      <label htmlFor="description">Description</label>
                    </div>
                    <div className="fields">
                      <Field
                      
                   
                        style={{width:"100%", background:"#F5F6F8", border:"none", padding:"30px 10px", borderRadius:"6px", margin:"10px 0px"}}
                      />
                    
                    </div>
                  </div>
                  <div className="pefi-area" style={{width:"100%", margin:"2% 1%"}}>
                    <div className="labels">
                      {/* <label htmlFor="description">Due Date</label> */}
                    </div>
                    <div className="fields">
                      <Field
                        placeholder="+ Attachments"
                        style={{width:"100%", textAlign:"center", background:"#F5F6F8", border:"none", padding:"30px 10px", borderRadius:"6px", margin:"10px 0px"}}
                      />
                    </div>
                  </div>

                 
                </div>

                        </div>
                        {/* <h5 style={{ padding: "10px" }}>Add Invoice</h5> */}

                       
                      </div>
                        </Form>
                      </Formik>
                      {/* <div className="right-info" key={detail?.id} style={{ width: "100%", display: "inline-block" }}>
                        <div className="ri-area" style={{ float: "right", paddingRight: "50px" }}>
                          <h2>{detail?.name}</h2>
                          <p>{detail?.amount}</p>

                        </div>

                      </div> */}

                      {/* <div className="left-info" key={clientList?.id} style={{ paddingLeft: "50px" }}>
                        <h2>{clientList?.first_name}</h2>
                        <p>{clientList?.email}</p>
                      </div> */}

                      <div className="addSelectedItems">
                        <h4 style={{ paddingLeft: "3%" }}>Line Items</h4>
                        {
                          products?.map?.(product => {
                            return (
                              selectedProducts?.includes(product?.id) ?
                                <div className='innerSelectedItem' style={{ display: "flex", justifyContent: "space-between", margin: "auto 6%" }}>
                                  <p>{product?.name}</p>
                                  <p>{product?.price}</p>
                                </div> : ''
                            )
                          })
                        }


                        {/* <p>{`${location?.state?.price}`}
                      </p> */}
                        {/* <p>{location?.state?.vat_rate}</p> */}
                      </div>


                      <div className='add-new-line-category'>
                        {/* <div className="add-new-line" onClick={() => navigate("/product-category")}>
                          <p>Add New Line</p>
                        </div> */}
                        <Select
                          labelId="demo-select-small-label"
                          // value={products[0]?.id}
                          // label={products[0]?.name}
                          onChange={(e) => setSelectedProducts([...selectedProducts, e.target.value])}
                          style={{ width: "93%", marginLeft: "3%" }}>
                          {products?.map(option =>
                            <MenuItem value={option.id}>{option.name}</MenuItem>
                          )}
                        </Select>

                        <div className='totalAmount' style={{ width: "100%", display: "inline-block" }}>
                          <div className="inner-tam" style={{ float: "right", paddingRight: "50px" }}>
                            {/* <p>Subtotal: <span>{detail?.amount}</span></p> */}
                            <p>Subtotal: <span>{totalSum()}</span></p>
                            <p>VAT: <span>0</span></p>
                            <p>Total: <span>{totalSum()}</span></p>

                            
                          </div>
                          <div className="btn-submits" style={{marginTop:"10%", marginBottom:"2%"}}>
                            <Button onClick={handleSubmit} style={{width:"20%", padding:"10px 0px", background:"#635EFF", color:"white", borderRadius:"6px", margin:"0px 30px"}}>Save Invoice</Button>
                            <Button style={{width:"20%", padding:"10px 0px", background:"#FF685E", color:"white", borderRadius:"6px", margin:"0px 10px"}}>Delete Invoice</Button>
                            </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDetail;
