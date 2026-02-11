
import { useCart } from '../../context/CartContext';
import './ProductCard.css'
function ProductCard({product}) {
    const { name, category, price, image } = product;
    const {
        addToCart,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
    } = useCart()

    const cartItem = cartItems.find(
        item => item.name === product.name
    )

  return (
    <article className="product-card">
        <picture>
            <source media='(min-width: 1024px)' srcSet={image.desktop}/>
            <source media='(min-width: 768px)' srcSet={image.tablet}/>
            <img src={image.mobile} alt={name} />
        </picture>

        {!cartItem ?(
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <img src="./src/assets/images/icon-add-to-cart.svg" alt="add to cart img" />
            <p>Add to Cart</p>
        </button>
        ):(
            <button className="quantity-control">
                <button onClick={() => decreaseQuantity(product.name)}>
                -
                </button>
                <span>{cartItem.quantity}</span>
                <button onClick={() => increaseQuantity(product.name)}>
                +
                </button>
            </button>
        )}

        <div className="product-info">
            <p className="category">{category}</p>
            <h3 className="name">{name}</h3>
            <p className="price">${price.toFixed(2)}</p>
        </div>
    </article>
  )
}

export default ProductCard