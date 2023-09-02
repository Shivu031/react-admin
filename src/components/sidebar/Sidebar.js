import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
          <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">react-admin</span>
          </Link>
          
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className='Icon'/>
              <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration: "none"}}>
              <li>
                <PersonOutlineOutlinedIcon className='Icon'/>
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{textDecoration: "none"}}>
              <li>
                <StoreIcon className='Icon'/>
                <span>Products</span>
              </li>
            </Link>
            <li>
              <CreditCardIcon className='Icon'/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className='Icon'/>
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className='Icon'/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className='Icon'/>
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className='Icon'/>
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className='Icon'/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className='Icon'/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className='Icon'/>
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className='Icon'/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
          <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar
