import products from '../../data/Products.json'
import ProductCard from './ProductCard'
import './ProductGrid.css'
import './ProductCard.css'

function ProductGrid() {
    console.log('products', products);
     if (!Array.isArray(products)) {
        return <p>Products data is not an array</p>
  }
  return (
    <div className="product-grid">

        {products.map(product => (
            < ProductCard 
            key={product.name} 
            product={product} 
            />
        ))}
    </div>
  )
}

export default ProductGrid