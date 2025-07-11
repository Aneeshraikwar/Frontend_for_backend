import React from 'react'
import './index.css'
import Img from './assets/ace.png'
import { Link, Outlet } from 'react-router-dom'
import Header from './pages/Header/Header.jsx'
import { SignUp14_39Oiq1mg } from './pages/SignUp.jsx'
import { SignIn5_4OGu4sTs } from './pages/Login.jsx'
import Footer from './pages/Footer/Footer.jsx'

function Index() {
  return (
    <>

      <Header />
      <Outlet />
      <Footer />



    </>
  )
}

export { SignUp14_39Oiq1mg, SignIn5_4OGu4sTs, Index ,Img};