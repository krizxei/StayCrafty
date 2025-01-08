import React from "react";
import NavigationBar from "./NavigationBar.js"; // Import the component
import "../Designs/BestSellers.css"; // Categories-specific CSS

const BestSellers = () => {
  return (
    <div className="BestSellers">
      <NavigationBar /> {/* Add the navigation bar */}
      {/* Add your categories content here */}
    </div>
  );
};

export default BestSellers;
