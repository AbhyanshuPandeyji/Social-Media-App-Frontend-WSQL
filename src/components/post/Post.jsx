import React, {useContext, useState} from 'react'
import "./post.scss";


import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { makeRequest } from '../../axios.js'


// import AuthContext from '../../context/authContext.js'
import Comments from '../comments/Comments';
import { AuthContext } from '../../context/authContext.js';




const Post = ({post}) => {

    

    const [commentOpen, setCommentOpen] = useState(false)

    // const queryClient = useQueryClient();

    // temporary
    // const liked = true;

    const { currentUser } = useContext(AuthContext);
    
    const queryClient = useQueryClient();

    


    // to fetch the likes on the post
    const { isLoading, error, data } = useQuery(["likes", post.id], ()=>
  // it didn't needed the req - use only what is necessary - the req, res is predefined names 
        makeRequest.get("/likes?postId="+post.id).then((res)=>{
        return res.data;
      })
      );

      
      
      const mutation = useMutation((liked) => {
        // to delete the like if already been liked 
        if(liked) return makeRequest.delete('/likes?postId=' + post.id);
        // to add like if not been liked the post
        return makeRequest.post('/likes', {postId : post.id}) ;
        }, {
            onSuccess: () => { // Invalidate and refetch , to refresh the like query
                queryClient.invalidateQueries(["likes"]);
            }
        })
        
        
        const handleLike = (e) =>{
            e.preventDefault();
            // so we are adding the data into database , while passing the current user id 
            // there was actually and error here , like was not getting not liked
            mutation.mutate(data.includes(currentUser.id));
        }
        
        // use this to avoid loading data before it even comes
        // console.log(data.includes(currentUser.id))
        if (isLoading) return "Loading...";
        if (error) return "An error has occurred: " + error.message;
        
        //   console.log()
        //   console.log(data , typeof data);
        // console.log(data);

    // console.log(data)
    // console.log(data.includes(currentUser.id));


    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={
                                post.profilePic
                            }
                            alt=""/>
                        <div className="details">
                            <Link to={
                                    `/profile/${
                                        post.userId
                                    }`
                                }
                                style={
                                    {
                                        textDecoration: "none",
                                        color: "inherit"
                                    }
                            }>
                                <span className='name'>
                                    {
                                    post.name
                                }</span>
                                {/* post made  */} 
                                </Link>
                            <span className='date'>
                                {
                                moment(post.createdAt).fromNow()
                            }</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{
                        post.desc ? post.desc : ""
                    }</p>
                    {/* this line is to not just store store but also show the image by 
                    selecting the same image from the upload folder with the same name */}
                    {
                    post.img ? <img src={
                            "./upload/" + post.img
                        }
                        alt="" className="img-Height"/> : ""
                } </div>
                <div className="info">
                    <div className="item">
                        {/* for like icon we need two icons , which one will be blank and one will be filled */}
                        {/* {
                        liked ? (<FavoriteOutlinedIcon style={{color : "red"}}/>): <FavoriteBorderOutlinedIcon/>
                    } */}

                    {/* // use the is loading for the data because it is loading the data first before even the data has come and then acutally showing the data which is come from the backend
                    for start on every part of the app the request using to fetch the data by react query is doing double data load , one time before one time after 
                    and cant defined that the data should be loaded after the data is been taken from the fetch , so its kind of need to be fixed */}
                        {/* {isLoading ? "" : `${data.length} likes`} */}

                    {/* // actual data with logic */}
                    {   isLoading ? ("loading...") :  
                        (data.includes(currentUser.id) ? 
                        (<FavoriteOutlinedIcon style={{color : "red"}} onClick={handleLike} />)
                        : (<FavoriteBorderOutlinedIcon onClick={handleLike}/>)
                        )
                    }

                    {data.length} likes

                    </div>





                    {/* for comments we need a modal , to write comment  , which shows comments on the post , view all comments , and to 
                reply on the specific comment by the user */}
                    {/* for that we need another component , which acts as a card / modal to show the data related to specific post , and comment on it */}
                    <div className="item"
                        onClick={
                            () => setCommentOpen(!commentOpen)
                    }>
                        {/* this is the method to use toggle , something - to set its value to not equal to what it was before  */}
                        <div className='inputComment'>
                            {/* <img src={currentUser.profilePic} alt="" />
                        <input type="text"  />
                        <button>Send</button>  */}
                        </div>
                        <TextsmsOutlinedIcon/>
                           {/* also show number of comments the same way done on other sides */}
                            comment
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>
                {/* if comment open is true then go to comments - when we write the state / variable comparison
             with this logical operator it takes it as it should be true - like && , || or !=  */}
                {
                commentOpen && <Comments postId={post.id} />
            } </div>
        </div>
    )
}

export default Post
