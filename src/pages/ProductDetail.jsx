import React from 'react'
import Header from '../layout/Header'
import Detail from '../components/ProductDetail/Detail'
import ProductDetailLayout from '../layout/ProductDetailLayout'
import Footer from '../layout/Footer'

export default function ProductDetail() {
  return (
    <div>
        <Header/>
        <ProductDetailLayout/>
        <Detail/>
        <Footer/>
    </div>
  )
}
