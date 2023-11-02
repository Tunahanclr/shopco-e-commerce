import React from 'react'
import Header  from '../layout/Header'
import Hero from '../components/Home/Hero'
import Products from '../components/Home/Products'
import Footer from '../layout/Footer'

export default function Home() {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Products/>
      <Footer/>
      </div>
  )
}
