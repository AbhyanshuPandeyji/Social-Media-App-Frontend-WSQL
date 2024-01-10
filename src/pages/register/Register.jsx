import React, { useState } from 'react'
import './register.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  const [ inputs , setInputs ] = useState({
    username : "",
    email: "",
    password:"",
    name : "",
  });


  const [err , setErr] = useState(null) 


  // on change to change the value of the input - on change method
  const handleChange = (e) =>{
    // ok so these names are not names these are the attribute part of the html element
    // the name is identifier and the different value in the attribute to the element is the value
    // the prev inputs are the inputs in the box  ,and changing those inputs with the current input we are putting in
    // and the target.value will work on different input boxes and the target.name -> the selecting 
    // which input box to select will change
    setInputs((prev)=>({
      // taking previous value , targeting the name and 
      // the value associated with the box , and changing value
      ...prev , [e.target.name] : e.target.value
    }));
  };

  // console.log(inputs);


  // what will happen after the value has been changed - on click method
  // make a register request on click 
  const handleClick = async (e) =>{

    e.preventDefault();

    try {
      // hitting the url and sending this data of the inputs
      await axios.post("http://localhost:8800/api/auth/register" , inputs);
      navigate("/");
    } catch (err) {
      // this will help us to get our message data from the backend
      // but how they are linking it , what is response , and what is data
      setErr(err.response.data);
    }

    console.log("user Has been logged in");
  }

  // console.log(err);

  return (
    <div className='register'>
            <div className='card'>
                <div className='left'>
                    <h1>Abhy Social</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis saepe et eum eveniet repudiandae voluptas, commodi
                        rerum vitae officia minus incidunt quo, iure consectetur
                        vero eaque, accusantium repellat? Perspiciatis, officia!
                    </p>
                    <span>Do You have and account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className='right'>
                  <h1>Register</h1>
                  <form>
                    {/* // naming matter in the form because that how it will send data into backend and that how it will set the data , 
                    and you have problem accessing it if you set wrong name to specify the input field */}
                    <input type="text" placeholder='Username' name="username" onChange={handleChange} />
                    <input type='email' placeholder='Email' name="email" onChange={handleChange} /> 
                    <input type='password' placeholder='Password' name="password" onChange={handleChange} /> 
                    <input type='text' placeholder='Name' name="name" onChange={handleChange} /> 
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                  </form>
                </div>
            </div>
        </div>
  )
}

export default Register;
