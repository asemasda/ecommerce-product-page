import './app.css';
import { useState } from "react";
import Header from './components/Header';
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
          <Header quantity={quantity} setQuantity={setQuantity} />
          <main className="app-main">
          <ProductGallery />
          <ProductInfo setQuantityInCart={setQuantity} />
      </main>
        
    </>
  
  )
}

export default App
