
import {useCart} from '../../context/CartContext'
import './CartItem.css'

function CartItem(item) {
    const {removeFromCart} = useCart()
  return (
    <div className="cart-item">
        <div className="item-info">
            <h4>{item.item.name}</h4>
            <p>
                {item.item.quantity}x   <span className="total-price">@ ${item.item.price.toFixed(2)}</span>   <span className="sub-total-price">$</span>
            </p>
            </div>
            <div className="button">
            <button className="remove-btn" onClick={() => removeFromCart(item.item.name)}>
            <img src={import.meta.env.BASE_URL + "assets/images/icon-remove-item.svg"} alt="Remove Item" />
            </button>
            </div>
        
    </div>
  )
}

export default CartItem
