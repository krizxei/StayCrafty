import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Routes and Route from react-router-dom
import Homepage from "./Screens/Homepage.js"; 
import Categories from "./Screens/Categories.js";
import Bestsellers from "./Screens/BestSellers.js";
import New from "./Screens/New.js";
import Stock from "./Screens/Stock.js";
import Aesthetic from "./Screens/Aesthetic.js";
import ItemDetails from "./Screens/ItemDetails.js";

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes for v6+ routing */}
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/new" element={<New />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/aesthetic" element={<Aesthetic />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
