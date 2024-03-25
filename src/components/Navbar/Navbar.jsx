import React, { useState } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Profile from '../../assets/img/profile.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Popover, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
    handleClose();
  };
  return (
    <div className='top-navbar'>
      <div className="navbar-section">
        <div className="heading-top">
          <p className='dashboard-heading'>Dashboard</p>
        </div>

        <div className="right-section">
          {/* <NotificationsNoneIcon /> */}
          <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3706 25.1129C9.02228 25.1129 7.03829 23.5278 6.44445 21.3785H4.00837C1.80172 21.3785 0 19.592 0 17.389C0 16.3278 0.41838 15.3203 1.17417 14.568L2.50354 13.2449V8.81873C2.50354 3.956 6.47822 0 11.3639 0C16.2496 0 20.2242 3.956 20.2242 8.81873V13.2449L21.5536 14.568C22.3094 15.3203 22.7278 16.321 22.7278 17.389C22.7278 19.5852 20.9328 21.3785 18.7194 21.3785H16.2901C15.6962 23.5278 13.7123 25.1129 11.3639 25.1129H11.3706ZM9.38673 21.3785C9.81861 22.0099 10.5474 22.4196 11.3706 22.4196C12.1939 22.4196 12.916 22.0032 13.3547 21.3785H9.3934H9.38673ZM15.1227 18.6852H18.7262C19.4415 18.6852 20.0285 18.1076 20.0285 17.389C20.0285 17.0397 19.8936 16.7173 19.6507 16.4755L17.9231 14.7561C17.6667 14.5009 17.525 14.1583 17.525 13.8024V8.81873C17.525 5.44034 14.765 2.6933 11.3706 2.6933C7.97632 2.6933 5.21632 5.44034 5.21632 8.81873V13.8024C5.21632 14.1583 5.07463 14.5009 4.8182 14.7561L3.09063 16.4755C2.8477 16.7173 2.71278 17.0464 2.71278 17.389C2.71278 18.1009 3.29307 18.6852 4.00837 18.6852H15.1227Z" fill="#121212" />
            </svg>
          <div className="profile-img">
            <img src={Profile} alt="" />
           
          </div>
          <div className="profile-heading">
            <p className="main-heading">
              <span className='profile-user-name'>Nick Devis</span><br />
              <span className='profile-user-des'>Business Advisor</span>
            </p>
          </div>
          <div className="profile-expand">
            <ExpandMoreIcon onClick={handleClick} />
            <Popover
              open={open}
              anchorEl={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              style={{ cursor: "pointer" }}
            >
              <div style={{ padding: '10px' }}>
                <Typography onClick={handleLogout}> Logout </Typography>
              </div>
              <div style={{ padding: '10px' }}>
                <Typography> Profile </Typography>
              </div>
              <div style={{ padding: '10px' }}>
                <Typography> Settings </Typography>
              </div>
              <div style={{ padding: '10px' }}>
                <Typography> Notification </Typography>
              </div>
            </Popover>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar