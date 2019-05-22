import React from 'react'
import './layout.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ children }) => (
  <div>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </div>
)