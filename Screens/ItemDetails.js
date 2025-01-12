import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar.js";
import "../Designs/ItemDetails.css"; // Scoped CSS for ItemDetails

const ItemDetails = () => {
  const { state: item } = useLocation(); // Get the item data passed through Link
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index

  const handleBack = () => navigate(-1); // Go back to the previous page

  const handleAddToCart = () => {
    alert(`Added ${quantity} of "${item.name}" to cart!`);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % item.images.length; // Loop to the first image if at the end
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + item.images.length) % item.images.length; // Loop to the last image if at the beginning
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="item-details">
      <NavigationBar />
      <div className="item-layout">
        <div className="image-container">
          <button onClick={handleBack} className="back-button">❮ Back</button>
          <div className="image-navigation">
            <button onClick={handlePrevImage} className="nav-button">❮</button>
            <img
              src={item.images[currentImageIndex]} // Display the current image
              alt={`${item.name} ${currentImageIndex + 1}`}
              className="main-image"
            />
            <button onClick={handleNextImage} className="nav-button">❯</button>
          </div>
        </div>
        <div className="item-info">
          <h1>{item.name}</h1>
          <h2>⭐⭐⭐⭐⭐</h2>
          <p className="price">₱{item.price}</p>
          <p>{item.description || "No description available."}</p>
          <p className={`stock-status ${item.stock > 0 ? "in-stock" : "out-of-stock"}`}>
            {item.stock > 0 ? "Selling Fast" : "Out of Stock"}
          </p>
           <div className="quantity-selector">
            <label>Quantity:</label>
            <button className="quantity-btn" onClick={() => handleQuantityChange("decrement")}>-</button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn" onClick={() => handleQuantityChange("increment")}>+</button>
          </div>
          <button
            onClick={handleAddToCart}
            className="add-to-cart"
            disabled={item.stock === 0} // Disable the button when out of stock
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
