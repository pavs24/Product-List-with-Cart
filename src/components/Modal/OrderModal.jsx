import { useCart } from '../../context/CartContext'
import './OrderModal.css'

function OrderModal({ onClose }) {
  const { cartItems, getTotalPrice, clearCart } = useCart()

  const handleNewOrder = () => {
    clearCart()
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <img
          src={import.meta.env.BASE_URL + "assets/images/icon-order-confirmed.svg"}
          alt="Order Confirmed"
          className="success-icon"
        />

        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div className="modal-items">
          {cartItems.map(item => (
            <div key={item.name} className="modal-item">
              <span>{item.name} x {item.quantity}</span>
              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}
        </div>

        <div className="modal-total">
          <span>Order Total</span>
          <strong>${getTotalPrice().toFixed(2)}</strong>
        </div>

        <button className="new-order-btn" onClick={handleNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default OrderModal
