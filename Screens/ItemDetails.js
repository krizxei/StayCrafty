import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar.js";
import "../Designs/ItemDetails.css"; // Scoped CSS for ItemDetails

const ItemDetails = () => {
  const { state: item } = useLocation(); // Get the item data passed through Link
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBack = () => navigate(-1); // Go back to the previous page

  const handleAddToCart = () => {
    alert(`Added ${quantity} of "${item.name}" to cart!`);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % item.images.length; // Loop back to the first image if at the end
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + item.images.length) % item.images.length; // Loop back to the last image if at the start
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="item-details">
      <NavigationBar />
      <div className="item-layout">
        <div className="image-container">
          <button onClick={handleBack} className="back-button">❮ Back</button>
          <div className="image-carousel">
            <button className="nav-button" onClick={handlePreviousImage}>
              ❮
            </button>
            <img
              src={item.images[currentImageIndex]} // Display the current image
              alt={item.name}
              className="main-image"
            />
            <button className="nav-button" onClick={handleNextImage}>
              ❯
            </button>
          </div>
        </div>
        <div className="item-info">
          <h1>{item.name}</h1>
          <h2>⭐⭐⭐⭐⭐</h2>
          <p className="price">₱{item.price}</p>
          <p>{item.description || "No description available."}</p>
          <p className="stock-status">Selling Fast</p>
          <div className="quantity-selector">
            <label>Quantity:</label>
            <button className="quantity-btn" onClick={() => handleQuantityChange("decrement")}>-</button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn" onClick={() => handleQuantityChange("increment")}>+</button>
          </div>
          <button onClick={handleAddToCart} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
