import { Link } from 'react-router-dom';
import React, { useState } from "react";
import NavigationBar from "./NavigationBar.js"; // Import the navigation bar component
import "../Designs/Categories.css"; // Categories-specific CSS

const Categories = () => {
  const items = [
    {
      id: 1,
      name: "Botanical Garland Set",
      image: require("../Pictures/Botanical Garland Set.jpg"),
      hoverImage: require("../Pictures/Botanical Garland Set 1.jpg"),
      price: 15,
      description: "A beautiful botanical garland set perfect for decoration.",
      reviews: ["Amazing quality!", "Loved it!", "Perfect gift for friends."],
    },
    {
      id: 2,
      name: "Botanical Pen",
      image: require("../Pictures/Botanical Pen.jpg"),
      hoverImage: require("../Pictures/Botanical Pen 1.jpg"),
      price: 5,
    },
    {
      id: 3,
      name: "Digital Journal",
      image: require("../Pictures/Digital Journal.jpg"),
      hoverImage: require("../Pictures/Digital Journal 1.jpg"),
      price: 5,
    },
    {
      id: 4,
      name: "Entomological Tote Bag",
      image: require("../Pictures/Entomological Tote Bag.jpg"),
      hoverImage: require("../Pictures/Entomological Tote Bag 1.jpg"),
      price: 5,
    },
    {
      id: 5,
      name: "Find Your Soul Path Book",
      image: require("../Pictures/Find Your Soul Path Book.jpg"),
      hoverImage: require("../Pictures/Find Your Soul Path Book 1.jpg"),
      price: 5,
    },
    {
      id: 6,
      name: "Gardener's Folklore Book",
      image: require("../Pictures/Gardener's Folklore Book.jpg"),
      hoverImage: require("../Pictures/Gardener's Folklore Book 1.jpg"),
      price: 5,
    },
    {
      id: 7,
      name: "Junk Journal",
      image: require("../Pictures/Junk Journal.jpg"),
      hoverImage: require("../Pictures/Junk Journal 1.jpg"),
      price: 5,
    },
    {
      id: 8,
      name: "Large Cord Tote Bag",
      image: require("../Pictures/Large Cord Tote Bag.jpg"),
      hoverImage: require("../Pictures/Large Cord Tote Bag 1.jpg"),
      price: 5,
    },
    {
      id: 9,
      name: "Lunar Planner",
      image: require("../Pictures/Lunar Planner.png"),
      hoverImage: require("../Pictures/Lunar Planner 1.png"),
      price: 5,
    },
    {
      id: 10,
      name: "Lunar Stamp",
      image: require("../Pictures/Lunar Stamp.png"),
      hoverImage: require("../Pictures/Lunar Stamp 1.png"),
      price: 5,
    },
    {
      id: 11,
      name: "Lunar Sticker",
      image: require("../Pictures/Lunar Sticker.png"),
      hoverImage: require("../Pictures/Lunar Sticker 1.png"),
      price: 5,
    },
    {
      id: 12,
      name: "Lunar Tote Bag",
      image: require("../Pictures/Lunar Tote Bag.jpg"),
      hoverImage: require("../Pictures/Lunar Tote Bag 1.jpg"),
      price: 5,
    },
    {
      id: 13,
      name: "Lunar Washi Tape Set",
      image: require("../Pictures/Lunar Washi Tape Set.jpg"),
      hoverImage: require("../Pictures/Lunar Washi Tape Set 1.jpg"),
      price: 5,
    },
    {
      id: 14,
      name: "Moon Poster Calendar",
      image: require("../Pictures/Moon Poster Calendar.jpg"),
      hoverImage: require("../Pictures/Moon Poster Calendar 1.jpg"),
      price: 5,
    },
    {
      id: 15,
      name: "Pen Refill",
      image: require("../Pictures/Pen Refill 1.jpg"),
      hoverImage: require("../Pictures/Pen Refill 2.jpg"),
      price: 5,
    },
    {
      id: 16,
      name: "Sakura Journal",
      image: require("../Pictures/Sakura Journal.png"),
      hoverImage: require("../Pictures/Sakura Journal 1.png"),
      price: 5,
    },
    {
      id: 17,
      name: "Sakura Stamp Set",
      image: require("../Pictures/Sakura Stamp Set.png"),
      hoverImage: require("../Pictures/Sakura Stamp Set 1.png"),
      price: 5,
    },
    {
      id: 18,
      name: "Sakura Sticker",
      image: require("../Pictures/Sakura Sticker.png"),
      hoverImage: require("../Pictures/Sakura Sticker 1.png"),
      price: 5,
    },
    {
      id: 19,
      name: "Sakura Washi Tape Set",
      image: require("../Pictures/Sakura Washi Tape Set.png"),
      hoverImage: require("../Pictures/Sakura Washi Tape Set 1.png"),
      price: 5,
    },
    {
      id: 20,
      name: "Sights of Japan",
      image: require("../Pictures/Sights of Japan.jpg"),
      hoverImage: require("../Pictures/Sights of Japan 1.jpg"),
      price: 5,
    },
    {
      id: 21,
      name: "Small Poster Hanger",
      image: require("../Pictures/Small Poster Hanger.jpg"),
      hoverImage: require("../Pictures/Small Poster Hanger 1.jpg"),
      price: 5,
    },
    {
      id: 22,
      name: "Sol and Luna Blanket",
      image: require("../Pictures/Sol and Luna Blanket.jpg"),
      hoverImage: require("../Pictures/Sol and Luna Blanket 1.jpg"),
      price: 5,
    },
    {
      id: 23,
      name: "Sol and Luna Dream Catcher",
      image: require("../Pictures/Sol and Luna Dream Catcher.jpg"),
      hoverImage: require("../Pictures/Sol and Luna Dream Catcher 1.jpg"),
      price: 5,
    },
    {
      id: 24,
      name: "Super Moon Bundle",
      image: require("../Pictures/Super Moon Bundle.jpg"),
      hoverImage: require("../Pictures/Super Moon Bundle 1.jpg"),
      price: 5,
    },
    {
      id: 25,
      name: "Tsuki Bookmark",
      image: require("../Pictures/Tsuki Bookmark.jpg"),
      hoverImage: require("../Pictures/Tsuki Bookmark 1.jpg"),
      price: 5,
    },
    {
      id: 26,
      name: "Tsuki Calendar and Calendar Guide",
      image: require("../Pictures/Tsuki Calendar and Calendar Guide.jpg"),
      hoverImage: require("../Pictures/Tsuki Calendar and Calendar Guide 1.jpg"),
      price: 5,
    },
    {
      id: 27,
      name: "Tsuki Greeting Cards x 12",
      image: require("../Pictures/Tsuki Greeting Cards x12.jpg"),
      hoverImage: require("../Pictures/Tsuki Greeting Cards x12 1.jpg"),
      price: 5,
    },
    {
      id: 28,
      name: "Tsuki Journal",
      image: require("../Pictures/Tsuki Journal.jpg"),
      hoverImage: require("../Pictures/Tsuki Journal 1.jpg"),
      price: 5,
    },
    {
      id: 29,
      name: "Tsuki Lamp",
      image: require("../Pictures/Tsuki Lamp.jpg"),
      hoverImage: require("../Pictures/Tsuki Lamp 1.jpg"),
      price: 5,
    },
    {
      id: 30,
      name: "Tsuki Notepad Combo",
      image: require("../Pictures/Tsuki Notepad Combo.jpg"),
      hoverImage: require("../Pictures/Tsuki Notepad Combo.jpg"),
      price: 5,
    },
    {
      id: 31,
      name: "Tsuki Shelf",
      image: require("../Pictures/Tsuki Shelf.jpg"),
      hoverImage: require("../Pictures/Tsuki Shelf 1.jpg"),
      price: 5,
    },
    {
      id: 32,
      name: "Tsuki Tote Bag",
      image: require("../Pictures/Tsuki Tote Bag.jpg"),
      hoverImage: require("../Pictures/Tsuki Tote Bag 1.jpg"),
      price: 5,
    },
    {
      id: 33,
      name: "Vintage Stationary Set",
      image: require("../Pictures/Vintage Stationary Set.jpg"),
      hoverImage: require("../Pictures/Vintage Stationary Set 1.jpg"),
      price: 5,
    },
    {
      id: 34,
      name: "Vintage Writer's Set",
      image: require("../Pictures/Vintage Writer's Set.jpg"),
      hoverImage: require("../Pictures/Vintage Writer's Set 1.jpg"),
      price: 5,
    },
    {
      id: 35,
      name: "Writer's Set",
      image: require("../Pictures/Writer's Set.jpg"),
      hoverImage: require("../Pictures/Writer's Set 1.jpg"),
      price: 5,
    },
    {
      id: 36,
      name: "Zodiac Calendar",
      image: require("../Pictures/Zodiac Calendar.jpg"),
      hoverImage: require("../Pictures/Zodiac Calendar 1.jpg"),
      price: 5,
    },
    {
      id: 37,
      name: "Zodiac Prints Set",
      image: require("../Pictures/Zodiac Prints Set.jpg"),
      hoverImage: require("../Pictures/Zodiac Prints Set 1.jpg"),
      price: 5,
    },
    {
      id: 38,
      name: "Zodiac Tote Bag",
      image: require("../Pictures/Zodiac Tote Bag.jpg"),
      hoverImage: require("../Pictures/Zodiac Tote Bag 1.jpg"),
      price: 5,
    },

  ];

  const [sortOption, setSortOption] = useState("default");
  const [sortedItems, setSortedItems] = useState(items);

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted;
    switch (option) {
      case "az":
        sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted = [...items].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priceLowHigh":
        sorted = [...items].sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        sorted = [...items].sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = items; // Default order
    }
    setSortedItems(sorted);
  };

  return (
    <div className="categories">
      <NavigationBar />
      <div className="banner">
        <img
          src={require("../Pictures/CategoriesBanner.png")}
          alt="Categories Banner"
          className="banner-image"
        />
      </div>

      <div className="sort-container">
        <label htmlFor="sort-select" className="sort-label">Sort By:</label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={handleSort}
          className="sort-select"
        >
          <option value="default">Default</option>
          <option value="az">Alphabetically A-Z</option>
          <option value="za">Alphabetically Z-A</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      <div className="items-grid">
        {sortedItems.map((item) => (
          <div key={item.id} className="item-card">
            <Link to={`/item/${item.id}`} className="item-link">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Categories;