import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

    const[currentUser , setCurrentUser ]  = useState(
        // json.parse - to transform string into object
        JSON.parse(localStorage.getItem('user')) || null
        // null is after the getting item , not inside it , 
        // remember how or work even if first condition is true if the second one is then it will set it to that value
    );


    const login =  async (inputs) =>{
        // TO DO - it will be done by api
        // api return our user info
        // then set our current user 

        // dummy function to have the user not null
        // setCurrentUser({
        //     id:1 , 
        //     name: "John Doe" , 
        //     profilePic : "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // });

        // actual data 
        const res = await axios.post("http://localhost:8800/api/auth/login" , inputs , {
            // because we are working with cookies if we don't use it we can encounter problems    
        withCredentials: true,
        });


        setCurrentUser(res.data);
    };


    useEffect(()=>{
        // before it was true or false 
        // in auth its going to be - include our user info - profile , name etc.
        // so we cannot write it directly like current user ,we need to transfer it into a string
        // because it will be an object
        // but why because you , cannot store object into local storage , it has to be a string , 
        // json.stringify - to transform string into an object value
        localStorage.setItem('user' , JSON.stringify(currentUser))
    } , [currentUser])

    // after changing current user it will run use effect  , and set user info into local storage

    return (
        // current user is a state , and login is a function

        <AuthContext.Provider value={{currentUser , login}}>
            {children}
        </AuthContext.Provider>


    )




}