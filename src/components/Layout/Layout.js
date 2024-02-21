import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../../Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
