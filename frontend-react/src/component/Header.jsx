import React from 'react'
import Button from './button'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className='navbar container pt-4 pb-3 align-items-start outline'>
        <Link className='navbar-brand text-light' to="/">Home</Link>
        <div>
            <Button text='login' class='btn-outline-info' url='/login'/>
            &nbsp;
            <Button text='register' class='btn-info ' url='/register'/>
        </div>

      </nav>
    </>
  )
}
export default Header