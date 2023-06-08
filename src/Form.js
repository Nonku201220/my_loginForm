import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form>
        <input type='text' className='input' placeholder='username'/>
        <input type='password' className='input' placeholder='password'/>

        <div className='checkbox'>
            <input type='checkbox' id='check'/>
            <label htmlFor='check'> Keep me signed in </label>
        </div>

            <div className='sign-in-button'>
                <a  className='sign-in'> Log In </a>
                <p Forgot Password ></p>
                <span Sign Up></span>
            </div>
    </form>
  )
}

export default Form