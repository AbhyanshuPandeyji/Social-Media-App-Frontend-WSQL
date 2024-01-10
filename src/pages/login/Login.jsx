import React, { useContext, useState } from 'react'
import './login.scss'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

const Login = () => {


    // login is the function to change the user value , so it should be used in login from
    
  const { login } = useContext(AuthContext);


  const [ inputs , setInputs ] = useState({
    username : "",
    password:"",
  });

  const [err , setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setInputs((prev)=>({

      ...prev , [e.target.name] : e.target.value
    }));
  };


  const handleLogin = async (e) =>{
    e.preventDefault();

    try {
        // this is the function in the authContext - because it will be used in every pages
        await login(inputs);
        navigate('/')
    } catch (err) {
        setErr(err.response.data);
    }
  }

    return (
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <h1>Hello World.</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis saepe et eum eveniet repudiandae voluptas, commodi
                        rerum vitae officia minus incidunt quo, iure consectetur
                        Svero eaque, accusantium repellat? Perspiciatis,  officia!
                    </p>
                    <span>Do You have and account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' name='username' onChange={handleChange}  />
                        <input type='password' placeholder='Password'  name='password' onChange={handleChange} />
                        {err &&  err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
