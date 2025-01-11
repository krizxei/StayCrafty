import { Link } from 'react-router-dom';
import React, { useState } from "react";
import NavigationBar from "./NavigationBar.js"; // Import the navigation bar component
import "../Designs/Categories.css"; // Categories-specific CSS

const Categories = () => {
  const items = [
    {
      id: 1,
      name: "Botanical Garland Set",
      images: [
        require("../Pictures/Botanical Garland Set.jpg"),
        require("../Pictures/Botanical Garland Set 1.jpg"),
      ],
      hoverImage: require("../Pictures/Botanical Garland Set 1.jpg"),
      price: 150.00,
      description: "A beautiful botanical garland set perfect for decoration.",
      reviews: ["Amazing quality!", "Loved it!", "Perfect gift for friends."],
    },
    {
      id: 2,
      name: "Botanical Pen",
      images: [
        require("../Pictures/Botanical Pen.jpg"),
        require("../Pictures/Botanical Pen 1.jpg"),
        require("../Pictures/Botanical Pen 2.jpg"),
      ],
      hoverImage: require("../Pictures/Botanical Pen 1.jpg"),
      price: 100.00,
      description: "Enhance your journaling experience with our laser engraved ballpoint pen in our botanical design. A weighted refillable brass ballpoint pen with a large blue ink cartridge and linear attachable cap. Please Note - It is natural for brass to patina over time as it reacts to the oxygen in the air and the oils from your skin called toning. We recommend cleaning with a brass polish.",
    },
    {
      id: 3,
      name: "Digital Journal",
      images: [
        require("../Pictures/Digital Journal.jpg"),
        require("../Pictures/Digital Journal 1.jpg"),
        require("../Pictures/Digital Journal 2.jpg"),
      ],
      hoverImage: require("../Pictures/Digital Journal 1.jpg"),
      price: 199.00,
      description: "Tailored for digital use, ideal for printing or on digital devices like iPads. Enhances creativity and self-awareness, aligned with the lunar cycle.",
    },
    {
      id: 4,
      name: "Entomological Tote Bag",
      images: [
        require("../Pictures/Entomological Tote Bag.jpg"),
        require("../Pictures/Entomological Tote Bag 1.jpg"),
        require("../Pictures/Entomological Tote Bag 2.jpg"),
      ],
      hoverImage: require("../Pictures/Entomological Tote Bag 1.jpg"),
      price: 350.00,
      description: "CARE INSTRUCTIONS: Wash cold, inside out. DO NOT dry clean, bleach, or iron directly on design."
    },
    {
      id: 5,
      name: "Find Your Soul Path Book",
      images: [
        require("../Pictures/Find Your Soul Path Book.jpg"),
        require("../Pictures/Find Your Soul Path Book 1.jpg"),
        require("../Pictures/Find Your Soul Path Book 2.jpg"),
      ],
      hoverImage: require("../Pictures/Find Your Soul Path Book 1.jpg"),
      price: 499.00,
    },
    {
      id: 6,
      name: "Gardener's Folklore Book",
      images: [
        require("../Pictures/Gardener's Folklore Book.jpg"),
        require("../Pictures/Gardener's Folklore Book 1.jpg"),
        require("../Pictures/Garderner's Folklore Book 2.jpg"),
      ],
      hoverImage: require("../Pictures/Gardener's Folklore Book 1.jpg"),
      price: 499.00,
    },
    {
      id: 7,
      name: "Junk Journal",
      images: [
        require("../Pictures/Junk Journal.jpg"),
        require("../Pictures/Junk Journal 1.jpg"),
        require("../Pictures/Junk Journal 2.jpg"),
      ],
      hoverImage: require("../Pictures/Junk Journal 1.jpg"),
      price: 399.00,
    },
    {
      id: 8,
      name: "Large Cord Tote Bag",
      images: [
        require("../Pictures/Large Cord Tote Bag.jpg"),
        require("../Pictures/Large Cord Tote Bag 1.jpg"),
        require("../Pictures/Large Cord Tote Bag 2.jpg"),
      ],
      hoverImage: require("../Pictures/Large Cord Tote Bag 1.jpg"),
      price: 359.00,
    },
    {
      id: 9,
      name: "Lunar Planner",
      images: [
        require("../Pictures/Lunar Planner.png"),
        require("../Pictures/Lunar Planner 1.png"),
      ],
      hoverImage: require("../Pictures/Lunar Planner 1.png"),
      price: 199.00,
    },
    {
      id: 10,
      name: "Lunar Stamp",
      images: [
        require("../Pictures/Lunar Stamp.png"),
        require("../Pictures/Lunar Stamp 1.png"),
      ],
      hoverImage: require("../Pictures/Lunar Stamp 1.png"),
      price: 299.00,
    },
    {
      id: 11,
      name: "Lunar Sticker",
      images: [
        require("../Pictures/Lunar Sticker.png"),
        require("../Pictures/Lunar Sticker 1.png"),
      ],
      hoverImage: require("../Pictures/Lunar Sticker 1.png"),
      price: 100.00,
    },
    {
      id: 12,
      name: "Lunar Tote Bag",
      images: [
        require("../Pictures/Lunar Tote Bag.jpg"),
        require("../Pictures/Lunar Tote Bag 1.jpg"),
      ],
      hoverImage: require("../Pictures/Lunar Tote Bag 1.jpg"),
      price: 350.00,
    },
    {
      id: 13,
      name: "Lunar Washi Tape Set",
      images: [
        require("../Pictures/Lunar Washi Tape Set.jpg"),
        require("../Pictures/Lunar Washi Tape Set 1.jpg"),
        require("../Pictures/Lunar Washi Tape Set 2.jpg"),
      ],
      hoverImage: require("../Pictures/Lunar Washi Tape Set 1.jpg"),
      price: 299.00,
    },
    {
      id: 14,
      name: "Moon Poster Calendar",
      images: [
        require("../Pictures/Moon Poster Calendar.jpg"),
        require("../Pictures/Moon Poster Calendar 1.jpg"),
        require("../Pictures/Moon Poster Calendar 2.jpg"),
      ],
      hoverImage: require("../Pictures/Moon Poster Calendar 1.jpg"),
      price: 399.00,
    },
    {
      id: 15,
      name: "Pen Refill",
      images: [
        require("../Pictures/Pen Refill 1.jpg"),
        require("../Pictures/Pen Refill 2.jpg"),
      ],
      hoverImage: require("../Pictures/Pen Refill 2.jpg"),
      price: 75.00,
    },
    {
      id: 16,
      name: "Sakura Journal",
      images: [
        require("../Pictures/Sakura Journal.png"),
        require("../Pictures/Sakura Journal 1.png"),
      ],
      hoverImage: require("../Pictures/Sakura Journal 1.png"),
      price: 199.00,
    },
    {
      id: 17,
      name: "Sakura Stamp Set",
      images: [
        require("../Pictures/Sakura Stamp Set.png"),
        require("../Pictures/Sakura Stamp Set 1.png"),
        require("../Pictures/Sakura Stamp Set 2.png"),
      ],
      hoverImage: require("../Pictures/Sakura Stamp Set 1.png"),
      price: 399.00,
    },
    {
      id: 18,
      name: "Sakura Sticker",
      images: [
        require("../Pictures/Sakura Sticker.png"),
        require("../Pictures/Sakura Sticker 1.png"),
      ],
      hoverImage: require("../Pictures/Sakura Sticker 1.png"),
      price: 100.00,
    },
    {
      id: 19,
      name: "Sakura Washi Tape Set",
      images: [
        require("../Pictures/Sakura Washi Tape Set.png"),
        require("../Pictures/Sakura Washi Tape Set 1.png"),
        require("../Pictures/Sakura Washi Tape Set 2.png"),
      ],
      hoverImage: require("../Pictures/Sakura Washi Tape Set 1.png"),
      price: 299.00,
    },
    {
      id: 20,
      name: "Sights of Japan",
      images: [
        require("../Pictures/Sights of Japan.jpg"),
        require("../Pictures/Sights of Japan 1.jpg"),
        require("../Pictures/Sights of Japan 2.jpg"),
      ],
      hoverImage: require("../Pictures/Sights of Japan 1.jpg"),
      price: 350.00,
    },
    {
      id: 21,
      name: "Small Poster Hanger",
      images: [
        require("../Pictures/Small Poster Hanger.jpg"),
        require("../Pictures/Small Poster Hanger 1.jpg"),
        require("../Pictures/Small Poster Hanger 2.jpg"),
      ],
      hoverImage: require("../Pictures/Small Poster Hanger 1.jpg"),
      price: 75,
    },
    {
      id: 22,
      name: "Sol and Luna Blanket",
      images: [
        require("../Pictures/Sol and Luna Blanket.jpg"),
        require("../Pictures/Sol and Luna Blanket 1.jpg"),
        require("../Pictures/Sol and Luna Blanket 2.jpg"),
      ],
      hoverImage: require("../Pictures/Sol and Luna Blanket 1.jpg"),
      price: 299.00,
    },
    {
      id: 23,
      name: "Sol and Luna Dream Catcher",
      images: [
        require("../Pictures/Sol and Luna Dream Catcher.jpg"),
        require("../Pictures/Sol and Luna Dream Catcher 1.jpg"),
        require("../Pictures/Sol and Luna Dream Catcher 2.jpg"),
      ],
      hoverImage: require("../Pictures/Sol and Luna Dream Catcher 1.jpg"),
      price: 150.00,
    },
    {
      id: 24,
      name: "Super Moon Bundle",
      images: [
        require("../Pictures/Super Moon Bundle.jpg"),
        require("../Pictures/Super Moon Bundle 1.jpg"),
        require("../Pictures/Super Moon Bundle 2.jpg"),
      ],
      hoverImage: require("../Pictures/Super Moon Bundle 1.jpg"),
      price: 499.00,
    },
    {
      id: 25,
      name: "Tsuki Bookmark",
      images: [
        require("../Pictures/Tsuki Bookmark.jpg"),
        require("../Pictures/Tsuki Bookmark 1.jpg"),
        require("../Pictures/Tsuki Bookmark 2.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Bookmark 1.jpg"),
      price: 50.00,
    },
    {
      id: 26,
      name: "Tsuki Calendar and Calendar Guide",
      images: [
        require("../Pictures/Tsuki Calendar and Calendar Guide.jpg"),
        require("../Pictures/Tsuki Calendar and Calendar Guide 1.jpg"),
        require("../Pictures/Tsuki Calendar and Calendar Guide 2.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Calendar and Calendar Guide 1.jpg"),
      price: 150.00,
    },
    {
      id: 27,
      name: "Tsuki Greeting Cards x 12",
      images: [
        require("../Pictures/Tsuki Greeting Cards x12.jpg"),
        require("../Pictures/Tsuki Greeting Cards x12 1.jpg"),
        require("../Pictures/Tsuki Greeting Cards x12 2.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Greeting Cards x12 1.jpg"),
      price: 199.00,
    },
    {
      id: 28,
      name: "Tsuki Journal",
      images: [
        require("../Pictures/Tsuki Journal.jpg"),
        require("../Pictures/Tsuki Journal 1.jpg"),
        require("../Pictures/Tsuki Journal 2.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Journal 1.jpg"),
      price: 199.00,
    },
    {
      id: 29,
      name: "Tsuki Lamp",
      images: [
        require("../Pictures/Tsuki Lamp.jpg"),
        require("../Pictures/Tsuki Lamp 1.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Lamp 1.jpg"),
      price: 399.00,
    },
    {
      id: 30,
      name: "Tsuki Notepad Combo",
      images: [
        require("../Pictures/Tsuki Notepad Combo.jpg"),
        require("../Pictures/Tsuki Notepad Combo 1.jpg"),
        require("../Pictures/Tsuki Notepad Combo 2.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Notepad Combo.jpg"),
      price: 199.00,
    },
    {
      id: 31,
      name: "Tsuki Shelf",
      images: [
        require("../Pictures/Tsuki Shelf.jpg"),
        require("../Pictures/Tsuki Shelf 1.jpg"),
        require("../Pictures/Tsuki Shelf 2.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Shelf 1.jpg"),
      price: 299.00,
    },
    {
      id: 32,
      name: "Tsuki Tote Bag",
      images: [
        require("../Pictures/Tsuki Tote Bag.jpg"),
        require("../Pictures/Tsuki Tote Bag 1.jpg"),
      ],
      hoverImage: require("../Pictures/Tsuki Tote Bag 1.jpg"),
      price: 350.00,
    },
    {
      id: 33,
      name: "Vintage Stationary Set",
      images: [
        require("../Pictures/Vintage Stationary Set.jpg"),
        require("../Pictures/Vintage Stationary Set 1.jpg"),
        require("../Pictures/Vintage Stationary Set 2.jpg"),
      ],
      hoverImage: require("../Pictures/Vintage Stationary Set 1.jpg"),
      price: 299.00,
    },
    {
      id: 34,
      name: "Vintage Writer's Set",
      images: [
        require("../Pictures/Vintage Writer's Set.jpg"),
        require("../Pictures/Vintage Writer's Set 1.jpg"),
        require("../Pictures/Vintage Writer's Set 2.jpg"),
      ],
      hoverImage: require("../Pictures/Vintage Writer's Set 1.jpg"),
      price: 299.00,
    },
    {
      id: 35,
      name: "Writer's Set",
      images: [
        require("../Pictures/Writer's Set.jpg"),
        require("../Pictures/Writer's Set 1.jpg"),
        require("../Pictures/Writer's Set 2.jpg"),
      ],
      hoverImage: require("../Pictures/Writer's Set 1.jpg"),
      price: 199.00,
    },
    {
      id: 36,
      name: "Zodiac Calendar",
      images: [
        require("../Pictures/Zodiac Calendar.jpg"),
        require("../Pictures/Zodiac Calendar 1.jpg"),
        require("../Pictures/Zodiac Calendar 2.jpg"),
      ],
      hoverImage: require("../Pictures/Zodiac Calendar 1.jpg"),
      price: 199.00,
    },
    {
      id: 37,
      name: "Zodiac Prints Set",
      images: [
        require("../Pictures/Zodiac Prints Set.jpg"),
        require("../Pictures/Zodiac Prints Set 1.jpg"),
      ],
      hoverImage: require("../Pictures/Zodiac Prints Set 1.jpg"),
      price: 199.00,
    },
    {
      id: 38,
      name: "Zodiac Tote Bag",
      images: [
        require("../Pictures/Zodiac Tote Bag.jpg"),
        require("../Pictures/Zodiac Tote Bag 1.jpg"),
      ],
      hoverImage: require("../Pictures/Zodiac Tote Bag 1.jpg"),
      price: 350.00,
    },
    {
      id: 39,
      name: "Sakura Pencil Case",
      images: [
        require("../Pictures/Sakura Pencil Case.png"),
        require("../Pictures/Sakura Pencil Case 1.png"),
      ],
      hoverImage: require("../Pictures/Sakura Pencil Case 1.png"),
      price: 199.00,
    },
    {
      id: 40,
      name: "Kawaii Pen Pouch",
      images: [
        require("../Pictures/Kawaii Pen Pouch.png"),
        require("../Pictures/Kawaii Pen Pouch 1.png"),
      ],
      hoverImage: require("../Pictures/Kawaii Pen Pouch 1.png"),
      price: 350.00,
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
          <div className="card" key={item.id}>
            <Link to={`/item/${item.id}`} state={item} key={item.id} className="card-link">
              <div
                className="image-container"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").src = item.hoverImage;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").src = item.image || item.images[0];
                }}
              >
                <img src={item.image || item.images[0]} alt={item.name} />
              </div>
              <div className="details">
                <h3 className="name">{item.name}</h3>
                <p className="price">₱{item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Categories;