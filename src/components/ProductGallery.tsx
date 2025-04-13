import { useState, useEffect } from "react";
import "./ProductGallery.css";
import Lightbox from "./Lightbox";

// Full-size product images
import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

// Thumbnails
import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

const images = [img1, img2, img3, img4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  // const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    // Update desktop/mobile state on resize
    useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth >= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery">

{!isDesktop && (
    <>
      <button className="gallery__arrow left" onClick={handlePrev}>‹</button>
      <button className="gallery__arrow right" onClick={handleNext}>›</button>
    </>
  )}
      <img
        src={images[selectedIndex]}
        alt={`Product ${selectedIndex + 1}`}
        className="gallery__main-image"
        onClick={() => window.innerWidth >= 768 && setShowLightbox(true)}
      />

      <div className="gallery__thumbnails">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className={`gallery__thumb ${selectedIndex === index ? "active" : ""}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {showLightbox && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setShowLightbox(false)}
          onSelect={(index) => setSelectedIndex(index)}
        />
      )}
    </div>
  );
}

export default ProductGallery;
