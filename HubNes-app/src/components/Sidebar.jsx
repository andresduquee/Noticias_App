import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Sidebar = ({ onSelectCategory }) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [activeCategory, setActiveCategory] = useState("general");

  const handleClick = (cat) => {
    setActiveCategory(cat);
    onSelectCategory(cat);
  };

  return (
    <div className="bg-dark text-white vh-100 p-3 position-fixed" style={{ width: '300px' }}>
      <h3 className="text-center">HubNews DMMM</h3>
      <hr className="text-white"/>
      <ul className="nav flex-column">
        {categories.map((cat) => (
          <li className="nav-item" key={cat}>
            <button
              onClick={() => handleClick(cat)}
              className={`btn w-100 mb-1 text-capitalize ${
                activeCategory === cat ? 'btn-primary' : 'btn-dark text-white'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
