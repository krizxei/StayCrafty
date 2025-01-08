import React from "react";
import NavigationBar from "./NavigationBar.js"; // Import the component
import "../Designs/Categories.css"; // Categories-specific CSS

const Categories = () => {
  return (
    <div className="categories">
      <NavigationBar /> {/* Add the navigation bar */}
      {/* Add your categories content here */}
    </div>
  );
};

export default Categories;
