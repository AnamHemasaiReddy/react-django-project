import React,{useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState({})
  const [success,setSuccess]=useState(false)
  const [loading,setLoading]=useState(false)
  const clickRegister= async(e)=>{
    e.preventDefault();
    setLoading(true);
    const userData={
      username,email,password
    }
    try{
      const response=await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
      console.log("response.data==>",response.data)
      console.log('registration')
      setSuccess(true)
    }catch(error){
      setError(error.response.data)
      console.error('register error',error.response.data)
    }finally{
      setLoading(false)

    }

  }
  return (
    <>
      <div className='container'>
        <div className=' row justify-content-center'>
          <div className='col-md-6 bg-light-darker p-5 rounded'>
            <h2 className='text-light text-center'>create an account</h2>
            <form onSubmit={clickRegister}>
              <div className='mb-3'>
               <input type="text" className='form-control ' placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/> 
               <small>{error.username && <div className='text-danger'>{error.username}</div>}</small>
              </div>
               <div>
                <input type="email" className='form-control mb-3' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
               </div>
               <div className='mb-3'>
                <input type="password" className='form-control ' placeholder='enter password'value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                <small>{error.password && <div className='text-danger'>{error.password}</div>}</small>
               </div>
               {success && <div className='alert alert-success'>Registeration Succussful</div>}
               {loading ?(<button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>please wait....</button>)
               :(<button type='submit' className='btn btn-info d-block mx-auto'>Register</button>)
               }
               
            </form>   
          </div>
        </div>

      </div>
    
    </>
  )
}

export default Register
