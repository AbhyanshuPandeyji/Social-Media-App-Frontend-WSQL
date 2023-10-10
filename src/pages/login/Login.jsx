import React, { useContext } from 'react'
import './login.scss'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/authContext';

const Login = () => {


    // login is the function to change the user value , so it should be used in login from
    
  const { login } = useContext(AuthContext);


  const handleLogin = () =>{
    login();
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
                                                vero eaque, accusantium repellat? Perspiciatis,  officia!
                    </p>
                    <span>Do You have and account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username'/>
                        <input type='password' placeholder='Password'/>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
