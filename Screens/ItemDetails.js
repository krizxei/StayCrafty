import React, { useState } from "react";
import NavigationBar from "./NavigationBar.js";
import "../Designs/ItemDetails.css";
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { id } = useParams(); // Get the item id from the URL
    const item = items.find(item => item.id === parseInt(id)); // Find the clicked item
  
    if (!item) return <p>Item not found!</p>;
  
    return (
      <div className="item-details">
        <h1>{item.name}</h1>
        <img src={item.image} alt={item.name} />
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button>Add to Cart</button>
        {/* Add other details like quantity */}
      </div>
    );
  };
  
  export default ItemDetails;