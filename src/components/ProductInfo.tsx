import { useState } from "react";
import "./ProductInfo.css";
import cartIcon from "../icons/icon-cart.svg";

type Props = {
    setQuantityInCart: (n: number) => void;
  };

function ProductInfo({ setQuantityInCart }: Props) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const handleAddToCart = () => {
    
    setQuantityInCart(quantity);
    // Later: send this to global cart state or context
  };

  return (
    <div className="info">
      <p className="info__brand">SNEAKER COMPANY</p>
      <h1 className="info__title">Fall Limited Edition Sneakers</h1>
      <p className="info__description">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className="info__price">
        <div>
          <span className="info__price-current">$125.00</span>
          <span className="info__discount">50%</span>
        </div>
        <span className="info__price-old">$250.00</span>
      </div>

      <div className="info__actions">
        <div className="info__quantity">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="info__add" onClick={handleAddToCart}>
          <img src={cartIcon} alt="Cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
