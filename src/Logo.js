import React from 'react'
import { RiMickeyFill } from 'react-icons/ri';


export default function Logo() {
  return (
    <>
    <div className='logo-holder'>
        <div className='logo'>
        <i className="ri-mickey-fill">
        <RiMickeyFill />
        </i>
        </div>
    </div>
    <div className='title'>User</div>
    </>
  )
}