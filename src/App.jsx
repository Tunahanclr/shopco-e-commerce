import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import Cart from './pages/Cart'
function App() {

  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes> 
        </BrowserRouter>
    </>
  )
}

export default App
