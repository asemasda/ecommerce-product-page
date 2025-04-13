import "./Cart.css";
import deleteIcon from "../icons/icon-delete.svg";
import productThumb from "../assets/images/image-product-1-thumbnail.jpg";

type CartProps = {
  quantity: number;
  onDelete: () => void;
};

function Cart({ quantity, onDelete }: CartProps) {
  const price = 125.0;
  const total = (price * quantity).toFixed(2);

  return (
    <div className="cart-dropdown">
      <h3>Cart</h3>
      <hr />
      {quantity === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-item">
          <img src={productThumb} alt="Product thumbnail" />
          <div className="cart-details">
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00 × {quantity} <strong>${total}</strong>
            </p>
          </div>
          <button className="cart-delete" onClick={onDelete}>
            <img src={deleteIcon} alt="Delete item" />
          </button>
        </div>
      )}
      {quantity > 0 && <button className="cart-checkout">Checkout</button>}
    </div>
  );
}

export default Cart;
