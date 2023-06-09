import React, {useState} from 'react'
import './Form.css'


const Form = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 2000);
    };

  return (
    <form>
        <input type='text' className='input' placeholder='username'/>
        <input type='password' className='input' placeholder='password'/>

        <div className='checkbox'>
            <input type='checkbox' id='check'/>
            <label htmlFor='check'> Keep me signed in </label>
        </div>

            <div className='sign-in-button'>
                <a onClick={handleClick}  className='sign-in'> Log In </a>
                {isClicked && 'You have Logged In '}
                <p> Forgot Password | <span> Sign Up</span></p>   
              
            </div>
    </form>
  )
}

export default Form