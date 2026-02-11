import { useState } from 'react'
import ProductGrid from './components/Product/ProductGrid'
import Cart from'./components/Cart/Cart'
function App() {
  

  return (
    <>
    <main className="app">
      <section className="products-section">
        <h1>Desserts</h1>
        <ProductGrid />
      </section>
        
        <Cart />
      
    </main>
     
    </>
  )
}

export default App
