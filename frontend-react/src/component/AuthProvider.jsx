import {useState,useContext,createContext} from 'react'
const AuthContext=createContext();

const AuthProvider=({children})=>{
        const [isloggedIn,setIsloggedIn]=useState(
            !!localStorage.getItem('accessToken')
        )
  
  return (
     <AuthContext.Provider value={{isloggedIn, setIsloggedIn}}>
        {children}
     </AuthContext.Provider>
  )
  }

export default AuthProvider
export {AuthContext};
