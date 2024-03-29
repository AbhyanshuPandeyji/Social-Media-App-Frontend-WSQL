// its profile picture of the user who commented - dont worry all the profile pics in the end will be taken by the id of the actual user , how its done its easy
/*
    first the user id - who logged in 
    second the posts id - the id of the post - which will also are reference or linked to the user who post it , so post id include id of post and the user id of person posting
    third - the as the user who posted the post when commented on him , will automatically add the id of the users in an array of the post which will help to locate the user who commented on it
    fourth - if we reference to those id , it will take us to a specific url to work with those posts 
    fifth - so process is user id is unique , then the post id is unique ,then when commented the user id saves the object of the comment - because comment can have multiple things , so it will be an array of objects 
    on the other hand the like one will be an array of strings because it only holds id and not the data with it 
*/

// different for including the same profile picture is been used so not get confused by the user id who is logged in , 
// and the id of the user other than that we interact - it helps in redux to to have user id , and other ids and id of other users , with name like currentUser ,and others as userId or else
// in redux we save in different constant or state management , and reducers to have distinguished values , and connect with them by accessing with values in page and redux state of the others
// like if this state is present ,and this id is present , do this , 
// or using params id to access to different id , remember we are not breaching their ids , we are just accessing specific general data that we can have access to as a user who is logged in and are present in the app database



import React, { useContext, useState } from 'react'
import "./comments.scss"
// context elements will be imported using the destructure method , 
// because there is two exports and no default export method ,
//  and to take the specific we use destructure 
import { AuthContext } from "../../context/authContext.js"
import { useMutation, useQueries, useQuery, useQueryClient } from 'react-query'
import { makeRequest } from '../../axios.js'
import moment from 'moment';

// getting post id through the post component , because we are going to 
//  access the comment through the post id to show only the comments done on the post
const Comments = ({postId}) => {
    
    
    // temporary data - for comments
    
    const { currentUser } = useContext(AuthContext)


    // const comments = [
    //     {
    //       // post id to define the id of the post to access the specific post 
    //         id: 1,
    //         desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloremque officia est soluta laboriosam dolore quas culpa temporibus aliquam itaque.",
    //         name : "Jane Doe",
    //         // userId - the id of the user to access the user related to that id - same for comment and replies
    //         userId: 2,
    //         profilePicture:"https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img: "https://images.pexels.com/photos/18463836/pexels-photo-18463836/free-photo-of-fortifications-of-galle-fort-on-the-southwest-coast-of-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
        
    //     {
    //         id: 2,
    //         name : "Harry Doe",
    //         userId: 3,
    //         profilePicture:"https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam! Porro nesciunt molestias quas maiores fugit",  
    //         img: "https://images.pexels.com/photos/7251585/pexels-photo-7251585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
        
    //     {
    //         id: 3,
    //         desc: "odit perspiciatis labore id asperiores voluptatibus deserunt dolorem.",
    //         name : "Money Doe",
    //         userId: 4,
    //         profilePicture:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img: "https://images.pexels.com/photos/16753341/pexels-photo-16753341/free-photo-of-toy-car-and-slides-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
        
    //     {
    //         id: 4,
    //         desc: "Ex eum cupiditate laudantium deleniti labore impedit earum, dolore aspernatur ut assumenda adipisci, ullam rerum officiis eaque, esse error commodi eius possimus atque a sequi sunt. Modi, dignissimos?",
    //         name : "Sin Doe",
    //         userId: 5,
    //         // its profile picture of the user who commented - dont worry all the profile pics in the end will be taken by the id of the actual user , how its done its easy
    //         /*
    //             first the user id - who logged in 
    //             second the posts id - the id of the post - which will also are reference or linked to the user who post it , so post id include id of post and the user id of person posting
    //             third - the as the user who posted the post when commented on him , will automatically add the id of the users in an array of the post which will help to locate the user who commented on it
    //             fourth - if we reference to those id , it will take us to a specific url to work with those posts 
    //             fifth - so process is user id is unique , then the post id is unique ,then when commented the user id saves the object of the comment - because comment can have multiple things , so it will be an array of objects 
    //             on the other hand the like one will be an array of strings because it only holds id and not the data with it 
    //         */
    //         profilePicture:"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img: "https://images.pexels.com/photos/10569548/pexels-photo-10569548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    
    //     {
    //         id: 5,
    //         desc: "Ex eum cupiditate laudantium deleniti labore impedit earum, dolore aspernatur ut assumenda adipisci, ullam rerum officiis eaque, esse error commodi eius possimus atque a sequi sunt. Modi, dignissimos?",
    //         name : "Jerry Jack",
    //         userId: 6,
    //         profilePicture:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
        
    // ];

    // its acts as same as the reducer of the file and the head of the redux state to differentiate the type of data that is being taken
    const queryClient = useQueryClient();
  
    // when using state of a text component always have it "" for text , when using data always use the null , or when using number
    const [desc, setDesc] = useState("");

    const { isLoading, error, data } = useQuery(["comments"], () =>
  // it didn't needed the req - use only what is necessary - the req, res is predefined names 
    // taking comment on the post where postId is in the keyword of the url of the comment on the specific post
    // as the comment can only be done on a specific post and also can get by that specific post
    // post id is the query we passed to specify the specific data we need
    makeRequest.get("/comments?postId="+postId).then((res)=>{
        return res.data;
    })
); 




    // adding data and fetching data using react query - this is for the uploading 
    // share components for new comments
    // this is to fetch the inserted comment through the app , and the mutation is going to fetch and show on the comment part of the post
    const mutation = useMutation((newComment) => {
        return makeRequest.post('/comments', newComment);
    }, {
        onSuccess: () => { // Invalidate and refetch
            queryClient.invalidateQueries(["comments"]);
        }
    })

    const handleClick = async (e) => {
        e.preventDefault();
        // we will use react-query use mutation for creating our post requests
        // mutation.mutate({desc});
        mutation.mutate({desc , postId});

        setDesc("");

    }


  return (
    <div className='comments'>
        {/* so this should be withing the comments and not in the profile section to add comments , 
        because it will vary for every post to comment on it */}
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Write a comment...' value={desc} onChange={e=>setDesc(e.target.value)} />
            <button onClick={handleClick}>Send</button>
        </div>
        { isLoading ? "loading" : 
            data.map((comment)=>(
                <div className="comment" key={comment.id}>
                    <img src={ comment.profilePic }alt=""/>
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>{moment(comment.createdAt).fromNow()}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Comments;
