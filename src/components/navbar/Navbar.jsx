import React from 'react'
import { Link } from 'react-router-dom';

// style import
import './navbar.scss'
import '../../style.scss'

// icons import 
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>abhysocial</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>

        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search...' />

        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
