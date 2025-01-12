import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Routes and Route from react-router-dom
import Homepage from "./Screens/Homepage.js"; 
import Categories from "./Screens/Categories.js";
import Bestsellers from "./Screens/BestSellers.js";
import New from "./Screens/New.js";
import Aesthetic from "./Screens/Homepage.js";
import ItemDetails from "./Screens/ItemDetails.js";
import { CartProvider } from "./Screens/CartContext.js";
import SellerCentre from './Screens/SellerCentre.js';

function App() {
  return (
    <CartProvider>
      <Router>
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          <Route path="/new" element={<New />} />
          <Route path="/aesthetic" element={<Aesthetic />} />
          <Route path="/seller-centre" element={<SellerCentre />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/journals" element={<Categories category="Journal" />} />
          <Route path="/pen" element={<Categories category="Pen" />} />
          <Route path="/tote-bags" element={<Categories category="Tote Bag" />} />
          <Route path="/sakura" element={<Categories theme="Sakura" />} />
          <Route path="/lunar" element={<Categories theme="Lunar" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
