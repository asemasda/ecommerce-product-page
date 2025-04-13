import { useEffect } from "react";
import "./Lightbox.css";
import iconPreviousLeft from "../icons/icon-previous.svg"
import iconNextRight from "../icons/icon-next.svg"
type LightboxProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
};

function Lightbox({ images, currentIndex, onClose, onSelect }: LightboxProps) {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onSelect(newIndex);
  };

  const handleNext = () => {
  const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onSelect(newIndex);
  };
  return (
    <div className="lightbox-overlay">
      <div className="lightbox">
        <button className="lightbox__close" onClick={onClose}>
          ×
        </button>
         {/* 👇 Arrow buttons */}
    <button
      className="lightbox__arrow left"
      onClick={handlePrev}
    >
      <img src={iconPreviousLeft} alt="Previous" />
      
    </button>

        <img src={images[currentIndex]} 
              className="lightbox__main" />
        
        <button
      className="lightbox__arrow right"
      onClick={() => onSelect(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
    >
      
      <img src={iconNextRight} alt="Next" />
    </button>

        <div className="lightbox__thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={handleNext}
              className={`lightbox__thumb ${currentIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
