import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom';

const Register = () => {
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
                    <input type="text" placeholder='Username' />
                    <input type='password' placeholder='Password'/> 
                    <input type='email' placeholder='Email'/> 
                    <input type='text' placeholder='Name'/> 
                    <button>Register</button>
                  </form>
                </div>
            </div>
        </div>
  )
}

export default Register;
