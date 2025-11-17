import React from "react";
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

  return (
    <div className="bg-dark text-white vh-100 p-3 position-fixed" style={{ width: '300px' }}>
      <h3 className="text-center">HubNews DMMM</h3>
      <hr className="text-white"/>
      <ul className="nav flex-column">
        {categories.map((cat) => (
          <li className="nav-item" key={cat}>
            <button
              onClick={() => onSelectCategory(cat)}
              className="btn btn-dark text-white text-capitalize w-100 mb-1"
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
