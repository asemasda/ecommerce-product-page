import "./MobileMenu.css";
import closeIcon from "../icons/icon-close.svg";



type Props = {
  isOpen: boolean;
  onClose: () => void;
};



function MobileMenu({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu__overlay">
    <div className="mobile-menu">
        <button className="mobile-menu__close" onClick={onClose}>
          <img src={closeIcon} alt="Close menu" />
        </button>
        <ul className="mobile-menu__nav">
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
