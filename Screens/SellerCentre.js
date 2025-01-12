import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar"; // Import the navigation bar component
import "../Designs/SellerCentre.css"; // Add any specific styles for SellerCentre

const SellerCentre = ({user}) => {
    useEffect(() => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    }, [user]);

  const [products, setProducts] = useState([
    // Same structure as in Categories.js for products
    {
      id: 1,
      name: "Botanical Garland Set",
      price: 150.00,
      description: "A beautiful botanical garland set perfect for decoration.",
      category: "Bundle",
    },
    {
      id: 2,
      name: "Botanical Pen",
      price: 100.00,
      description: "Enhance your journaling experience with our laser engraved ballpoint pen.",
      category: "Pen",
    },
    // Add all your other products here
  ]);

  const handleEdit = (productId) => {
    // Logic to edit product details, e.g., open a modal or form
    console.log("Editing product with ID:", productId);
  };

  const handleDelete = (productId) => {
    // Remove product from the list
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className="seller-centre">
      <NavigationBar /> {/* Add navigation bar at the top */}
      <Link to="/categories">
        <button className="back-btn">Back</button> {/* Back button to Categories page */}
      </Link>
      <h2>Seller Centre</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={require(`../Pictures/${product.name}.jpg`)} // Example of how to use the image
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleEdit(product.id)}>Edit</button>
              <button onClick={() => handleDelete(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerCentre;
