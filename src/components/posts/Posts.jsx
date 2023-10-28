import React from 'react'
import './posts.scss';
import Post from '../post/Post';
import { makeRequest } from '../../axios';
import { useQuery } from 'react-query';

const Posts = () => {

  // remember when working / using other component as a card , the data usually will be first taken by the parent component
  // and then that data going to pass to the card , because card handles the single data , and the parent component gets the all data
  // because we map to the card component , and render one data at a time to show the data should be send from parent to child

  // temporary - this is the data 
  const posts = [
    {
      // post id to define the id of the post to access the specific post 
        id: 1,
        name : "John Doe",
        // userId - the id of the user to access the user related to that id - same for comment and replies
        userId: 1,
        profilePic:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloremque officia est soluta laboriosam dolore quas culpa temporibus aliquam itaque.",
        img: "https://images.pexels.com/photos/18463836/pexels-photo-18463836/free-photo-of-fortifications-of-galle-fort-on-the-southwest-coast-of-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
    {
        id: 2,
        name : "Carry Doe",
        userId: 1,
        profilePic:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quibusdam! Porro nesciunt molestias quas maiores fugit",  
        img: "https://images.pexels.com/photos/7251585/pexels-photo-7251585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
    {
        id: 3,
        name : "Henry Doe",
        userId: 1,
        profilePic:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "odit perspiciatis labore id asperiores voluptatibus deserunt dolorem.",
        img: "https://images.pexels.com/photos/16753341/pexels-photo-16753341/free-photo-of-toy-car-and-slides-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
    {
        id: 4,
        name : "Money Doe",
        userId: 1,
        profilePic:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Ex eum cupiditate laudantium deleniti labore impedit earum, dolore aspernatur ut assumenda adipisci, ullam rerum officiis eaque, esse error commodi eius possimus atque a sequi sunt. Modi, dignissimos?",
        img: "https://images.pexels.com/photos/10569548/pexels-photo-10569548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
        id: 5,
        name : "Jerry Jack",
        userId: 1,
        profilePic:"https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Ex eum cupiditate laudantium deleniti labore impedit earum, dolore aspernatur ut assumenda adipisci, ullam rerum officiis eaque, esse error commodi eius possimus atque a sequi sunt. Modi, dignissimos?",
    },
    
];

  // we can use use effect and we can use redux 
  // we will use the react query - for fetching data - its efficient than use effect


  // react query function 
  // const { isLoading, error, data } = useQuery(["posts"], () =>
  // // it didn't needed the req - use only what is necessary - the req, res is predefined names 
  //     makeRequest.get("/posts").then((res)=>{
  //       return res.data;
  //     })
  //   ); 
  

  //     console.log(data);

  return (
    <div className='posts'>
      {/* for this we need to create one more component here to render through , because its not a good idea to show the parts directly 
      we need these posts to work like as a card  , and we need to do the same with the stories , where other data are the story cards and not the actual stories */}
      {/* why its not a good idea , because we will have mutilple functionality to it , and if we gonna have it we can't represent the data taken , 
      we also need a place to work on it , thats why we need another component to use the render data and utilize it for different tasks like comment & like */}
      {/* {error ? "Something Went Wrong!" : (isLoading ? "loading" : 
      data.map((post)=>(
        // this is our where we pass our data , to show it in a specific way , work as a card
        <Post  post={post}  key={post.id}/>)
      ))} */}
      {posts.map((post)=>(
        // this is our where we pass our data , to show it in a specific way , work as a card
        <Post  post={post}  key={post.id}/>)
      )}
    </div>

  )
}

export default Posts;
