import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

// style import
import './navbar.scss'

// icons import 
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  WbSunnyOutlinedIcon  from '@mui/icons-material/WbSunnyOutlined';

// states
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

  const { toggle , darkMode } = useContext(DarkModeContext);


  // current user is the state value of the variable , and 
  // it should be used where we need to use the value of the user and show it 
  // it doesn't have to have the other functions with it , same as login doesn't have to have the current user with it 
  // use only variable and states that are required in the page
  const { currentUser } = useContext(AuthContext);





  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>abhysocial</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkMode ? <WbSunnyOutlinedIcon  onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle} />  }
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
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
