import React from 'react'
import ProductsList from '../components/Products/ProductsList'
import Header from '../layout/Header'
import ProductsLayout from '../layout/ProductsLayout'
import Footer from '../layout/Footer'
export default function Products() {
  return (
    <div>
      <Header/>
      <ProductsLayout/>
      <ProductsList/>
      <Footer/>
    </div>
  )
}
