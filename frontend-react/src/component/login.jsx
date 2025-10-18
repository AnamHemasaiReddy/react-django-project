import React,{useContext, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './AuthProvider';

const Login = () => {
   const [username,setUsername]=useState('')
   const [password,setPassword]=useState('')
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState('')
   const navigate=useNavigate()
   const {isloggedIn, setIsloggedIn}=useContext(AuthContext)
   const handlelogin= async(e)=>{
    e.preventDefault();
    setLoading(true)
    const userData={username,password}
    console.log('userdata==>',userData)

    try{
      const response=await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      console.log('login successfuly')
      setIsloggedIn(true)
      navigate('/')
    }catch(error){
      console.error('invalid credentials')
      setError('INVALID CREDENTIALS')
    }finally{
      setLoading(false)
    }

   }
  return (
     <>
      <div className='container'>
        <div className=' row justify-content-center'>
          <div className='col-md-6 bg-light-darker p-5 rounded'>
            <h2 className='text-light text-center'>login</h2>
            <form onSubmit={handlelogin}>
              <div className='mb-3'>
               <input type="text" className='form-control ' placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
              </div>
               <div className='mb-3'>
                <input type="password" className='form-control ' placeholder='enter password'value={password} onChange={(e)=>setPassword(e.target.value)}/> 
               </div>

               {error &&<div className='text-danger'>{error}</div>}
               
               {loading ?(<button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>please wait....</button>)
               :(<button type='submit' className='btn btn-info d-block mx-auto'>login</button>)
               }
               
            </form>   
          </div>
        </div>

      </div>
      </>
  )
}

export default Login
