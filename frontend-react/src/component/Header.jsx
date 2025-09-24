import React from 'react'
import Button from './button'
const Header = () => {
  return (
    <>
      <nav className='navbar container pt-4 pb-3 align-items-start'>
        <a className='navbar-brand text-light' href="">Home</a>
        <div>
            <Button text='login' class='btn-outline-info'/>
            &nbsp;
            <Button text='register' class='btn-info'/>
        </div>

      </nav>
    </>
  )
}
export default Header