import React, {useContext, useState} from 'react'
import "./post.scss";


import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Link} from 'react-router-dom';
import moment from 'moment';

// import AuthContext from '../../context/authContext.js'
import Comments from '../comments/Comments';

const Post = ({post}) => {


    const [commentOpen, setCommentOpen] = useState(false)


    // temporary
    const liked = true;

    // const { currentUser } = useContext(AuthContext);


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
                                {/* post made  */} </Link>
                            <span className='date'>
                                {
                                moment(post.createdAt).file
                            }</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{
                        post.desc ? post.desc : ""
                    }</p>
                    {
                    post.img ? <img src={
                            "./upload/" + post.img
                        }
                        alt=""/> : ""
                } </div>
                <div className="info">
                    <div className="item">
                        {/* for like icon we need two icons , which one will be blank and one will be filled */}
                        {
                        liked ? <FavoriteOutlinedIcon/>: <FavoriteBorderOutlinedIcon/>
                    }
                        12 likes
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
                        <button>Send</button> */} </div>
                        <TextsmsOutlinedIcon/>
                        12 comment
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        Share
                    </div>
                </div>
                {/* if comment open is true then go to comments - when we write the state / variable comparison
             with this logical operator it takes it as it should be true - like && , || or !=  */}
                {
                commentOpen && <Comments/>
            } </div>
        </div>
    )
}

export default Post
