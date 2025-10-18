import { useContext } from 'react'
import Button from './button'
import {Link} from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const {isloggedIn,setIsloggedIn}=useContext(AuthContext)
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsloggedIn(false)
    navigate('/login')
  }
  return (
    <>
      <nav className='navbar container pt-4 pb-3 align-items-start outline'>
        <Link className='navbar-brand text-light' to="/">Home</Link>
       
        <div>
          {isloggedIn ?(
            <button  className='btn btn-danger' onClick={handlelogout}>logout</button>
          ):(
            <>
             <Button text='login' class='btn-outline-info' url='/login'/>
              &nbsp;
             <Button text='register' class='btn-info ' url='/register'/>
            </>
            )}
          </div>
           

      </nav>
    </>
  )
}
export default Header