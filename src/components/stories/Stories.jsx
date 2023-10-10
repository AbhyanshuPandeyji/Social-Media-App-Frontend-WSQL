import React, { useContext } from 'react'
import './stories.scss'


import {AuthContext} from '../../context/authContext.js'

const Stories = () => {

    const { currentUser } = useContext(AuthContext)




    // temporary data 
    const stories = [
        {
            id: 1,
            name : "John Doe",
            img: "https://images.pexels.com/photos/18463836/pexels-photo-18463836/free-photo-of-fortifications-of-galle-fort-on-the-southwest-coast-of-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            name : "Carry Doe",
            img: "https://images.pexels.com/photos/18469129/pexels-photo-18469129/free-photo-of-fields-in-the-scenic-vinales-valley-cuba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name : "Ian Doe",
            img: "https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            name : "Jack Doe",
            img: "https://images.pexels.com/photos/2179666/pexels-photo-2179666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 5,
            name : "Money Doe",
            img: "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];



  return (
    <div className='stories'>
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
    {stories.map((story)=>(
        <div key={story.id} className="story">
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
    ))}
    </div>
  )
}

export default Stories
