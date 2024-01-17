import React, { Fragment, useContext, useState } from 'react'
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



// components
import Posts from '../../components/posts/Posts.jsx'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { makeRequest } from '../../axios.js'
import { useLocation } from 'react-router-dom';
import Update from '../../components/update/Update.jsx'



const Profile = () => {

  
  const [openUpdate ,  setOpenUpdate] = useState(false)

  const { currentUser } = useContext(AuthContext);

  const userId = Number.parseInt(useLocation().pathname.split("/")[2]);

  const queryClient = useQueryClient();


    
    
  

  // the user is not getting refetched and showing on the page of new user even if the url changes
  // the posts are showing for all even if the profile is of different person , need a condition to only
  // show the post of the user of the profile who we are visiting and not ours or user we follow
  // to fetch the profile of the user logged in app
  const { isLoading, error, data } = useQuery(["user"], ()=>
  // it didn't needed the req - use only what is necessary - the req, res is predefined names 
  makeRequest.get("/users/find/"+ userId).then((res)=>{
    return res.data;
  })
  );
  

  // to fetch the followers of the user on the profile page 
  // when to need to change the name of the name of the data coming , we use name : then using another notation for the same data 
  // in here like data : relationshipData , to still access data with a different name to not have name conflict
  const {  isLoading : rIsLoading  , data : relationshipData } = useQuery(["relationship"], ()=>
  makeRequest.get("/relationships?followedUserId="+ userId).then((res)=>{
    return res.data;
  })
  );

  // // it will show the user id of our user on the user we are following
  // console.log(relationshipData);

  // it didn't needed the req - use only what is necessary - the req, res is predefined names 
  

  // to load the relationship
  const mutation = useMutation((following) => {
    // to delete the like if already been liked 
    if(following) return makeRequest.delete('/relationships?userId=' + userId);
    // to add like if not been liked the post
    return makeRequest.post('/relationships', { userId }) ;
    }, {
        onSuccess: () => { // Invalidate and refetch , to refresh the like query
            queryClient.invalidateQueries(["relationship"]);
        }
    })
    
  
  // Handle Follow 
  const handleFollow = (e) =>{
    e.preventDefault();
    mutation.mutate(relationshipData.includes(currentUser.id));

  }

  // console.log(Number.parseInt(useLocation().pathname.split("/")[2]))
  
     if (isLoading) return "Loading...";
     if (rIsLoading) return "Loading...";
     if (error) return "An error has occurred: " + error.message;


    //  console.log(data);
    //  console.log(relationshipData);
    //  console.log(typeof(userId));

  return (
        <div className='profile'>
            { isLoading ? ("Loading...") : 
              ( <Fragment>
              <div className="container">
                <div className="images">
                    {/* one background image  */}
                    {/* <img src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cover' alt="cover"/> {/* one profile image */}
                    {/* <img src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='cover' alt="cover"/> {/* one profile image */}
                    {/* one background image  */}
                    <img src={"/upload/"+data.coverPic} className='cover' alt="cover"/> 
                    {/* one profile image */}
                    <img src={"/upload/"+data.profilePic} className="profilePic" alt="profilePic"/>

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
                      {/* <span>Jane Doe</span> */}
                      <span>{data.name}</span>
                      <div className="info">
                        <div className="item">
                          <PlaceIcon />
                          <span>{data.city}</span>
                          {/* <span>city</span> */}
                        </div>
                        <div className="item">
                          <LanguageIcon />
                          <span>{data.website}</span>
                          {/* <span>website</span> */}
                          </div>
                        </div>
                        { rIsLoading ? ("Loading...") :  userId === currentUser.id ? 
                        ( <button onClick={()=>setOpenUpdate(true)} >Update</button> ) :
                          ( <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow" }</button> )
                          }
                      </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/> 
                    </div>
                  </div>
                  {/* you can either use it inside this profile container to utilize its padding or
                   you can create your self global padding what ever suits you  */}
                  {/* try to create the styling with the global variables where you can to minimize the css files  */}
                <Posts userId={userId}/>
                </div>
            </div> 
            </Fragment>)}
            {/* // here data is acting as the current user data */}
            {openUpdate && <Update setOpenUpdate={setOpenUpdate}  user={data} /> }
        </div>
    )
}



export default Profile;
