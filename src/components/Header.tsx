import './Header.css';
import logo from "../icons/logo.svg";
import iconCart from "../icons/icon-cart.svg";
import imageAvatar from "../icons/image-avatar.png";
import { useState } from "react";
import Cart from "./Cart";
import menuIcon from "../icons/icon-menu.svg";
import MobileMenu from "./MobileMenu";

type HeaderProps = {
  quantity: number;
  setQuantity: (n: number) => void;
};

function Header({ quantity, setQuantity }: HeaderProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // ✅ Hook now inside component

  const toggleCart = () => setCartOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header__left">
        {/* 👇 Hamburger menu (mobile only) */}
        <div className="header__mobile-toggle" onClick={() => setMobileOpen(true)}>
          <img src={menuIcon} alt="Open menu" />
        </div>

        {/* Logo */}
        <img src={logo} alt="Sneakers Logo" className="header__logo" />

        {/* Nav links (desktop only) */}
        <nav className="header__nav">
          <ul>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="header__right">
        <div className="header__cart-icon" onClick={toggleCart}>
          <img src={iconCart} alt="Cart" className="header__cart" />
          {quantity > 0 && (
            <span className="header__cart-count">{quantity}</span>
          )}
        </div>

        <img src={imageAvatar} alt="User" className="header__avatar" />

        {cartOpen && (
          <Cart quantity={quantity} onDelete={() => setQuantity(0)} />
        )}
      </div>

      {/* 👇 Mobile Nav Overlay */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export default Header;
