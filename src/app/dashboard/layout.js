'use client'
import React from 'react'
import Navbar from '../components/navigation/Navbar'
import { ProvideContext,useContexter } from './contexter'

function Layout({children}) {
   
  return (
    <ProvideContext>
    <div>
      <Navbar></Navbar>
      {children}
    </div>
    </ProvideContext>
  )
}

export default Layout
