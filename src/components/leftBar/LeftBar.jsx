import React, { useContext } from 'react'
import './leftBar.scss'

import Friends from '../../assets/1.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';
import { AuthContext } from '../../context/authContext';


const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);




    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                      {/* remember it will show error if you are not logged in so don't be worry ,
                      it only a temporary or error related to the not logged in user , and not that you 
                      writed something wrong that needs to be fixed , ofcourse unless you writed the login
                      function later wrong then you need to check the login status , and data intake */}
                        {/* <img src={currentUser.profilePic} alt=""/> */}
                        <span>{currentUser.name}</span>
                    </div>
                    {/* all have image and a span */}
                    <div className="item">
                      <img src={Friends} alt="" />
                      <span>Friends</span>
                    </div>
                    <div className="item">
                      <img src={Groups} alt="" />
                      <span>Groups</span>
                    </div>
                    <div className="item">
                      <img src={Market} alt="" />
                      <span>Market</span>
                    </div>
                    <div className="item">
                      <img src={Watch} alt="" />
                      <span>Watch</span>
                    </div>
                    <div className="item">
                      <img src={Memories} alt="" />
                      <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                  <span>Your Shortcuts</span>
                  <div className="item">
                      <img src={Events} alt="" />
                      <span>Events</span>
                    </div>
                    <div className="item">
                      <img src={Gaming} alt="" />
                      <span>Gaming</span>
                    </div>
                    <div className="item">
                      <img src={Gallery} alt="" />
                      <span>Gallery</span>
                    </div>
                    <div className="item">
                      <img src={Videos} alt="" />
                      <span>Videos</span>
                    </div>
                    <div className="item">
                      <img src={Messages} alt="" />
                      <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                  <span>Other Items</span>
                    <div className="item">
                      <img src={Fund} alt="" />
                      <span>Fundraiser</span>
                    </div>
                  <div className="item">
                      <img src={Tutorials} alt="" />
                      <span>Tutorials</span>
                    </div>
                    <div className="item">
                      <img src={Courses} alt="" />
                      <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar
