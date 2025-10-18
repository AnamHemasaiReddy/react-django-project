import { useState } from 'react'
import "./assets/css/style.css"
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './component/Register'
import Login from './component/login'
import AuthProvider from './component/AuthProvider'

function App() {
  

  return (
    <>
    <AuthProvider>
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route path='/' element={<Main />}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </AuthProvider>
    </>
  )
}

export default App
