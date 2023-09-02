import React, { useContext } from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='Icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='Icon' onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className='Icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='Icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='Icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='Icon'/>
          </div>
          <div className="item">
            <img src="../profile.jpg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
