import React, { useContext } from 'react'
import './profile.scss'


// icons
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone"
import LinkedIn from "@mui/icons-material/LinkedIn"
import Instagram from "@mui/icons-material/Instagram"
import Pinterest from "@mui/icons-material/Pinterest"
import Twitter from "@mui/icons-material/Twitter"
import PlaceIcon from "@mui/icons-material/Place"
import LanguageIcon from "@mui/icons-material/Language"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"



import {AuthContext} from '../../context/authContext.js'


const Profile = () => {


  const { currentUser } = useContext(AuthContext)



  return (
        <div className='profile'>
            <div class="container">
                <div className="images">
                    {/* one background image  */}
                    <img src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cover"/> {/* one profile image */}
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profilePic"/>
                </div>
                <div className="profileContainer">
                  <div className="uInfo">
                    <div className="left">
                      <a href='http://facebook.com'>
                        <FacebookTwoToneIcon fontSize='large'/>
                      </a>
                      <a href='http://linkedin.com'>
                        <LinkedIn fontSize='large'/>
                      </a>
                      <a href='http://instagram.com'>
                        <Instagram fontSize='large'/>
                      </a>
                      <a href='http://pinterest.com'>
                        <Pinterest fontSize='large'/>
                      </a>
                      <a href='http://Twitter.com'>
                        <Twitter fontSize='large'/>
                      </a>
                    </div>
                    <div className="center">
                      {/* <span>{currentUser.name}</span> */}
                      <span>Jane Doe</span>
                      <div className="item">
                        <PlaceIcon />
                        <span>USA</span>
                      </div>
                      <div className="item">
                        <LanguageIcon />
                        <span>Abhy,Dev</span>
                      </div>
                      <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/> 
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
