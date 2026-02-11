import { useState } from "react"
import "./Cart.css"
import {useCart} from '../../context/CartContext'
import OrderModal from "../Modal/OrderModal"
import CartItem from "./CartItem"

function Cart() {
  const {cartItems, getTotalPrice} = useCart()
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="cart">
        <h2>Your Cart ({cartItems.length})</h2>

        {cartItems.length === 0 ?(
        <div className="cart-empty">
            <img src="./src/assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
            <p>Your added items will appear here</p>
        </div>
        ): (
          <>
          {cartItems.map(item => (
            <CartItem key={item.name} item={item} />
          ))}
            <div className="cart-total">
              <span>Order Total</span>
              <strong>${getTotalPrice().toFixed(2)}</strong>
            </div>

          </>
        )
        }
        {cartItems.length > 0 && (
          <>

          <div className="carbon-note">
          <img src="./src/assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
          <p>
            This is a <strong>carbon-neutral</strong> delivery
          </p>
          </div>
          </>
  )}
  {cartItems.length > 0 && (
  <button className="confirm-btn" onClick={() => setShowModal(true)}>
        Confirm Order
  </button>
  )}

  {showModal && (
  <OrderModal onClose={() => setShowModal(false)} />
  )}
</div>
)
    
     
}


export default Cart