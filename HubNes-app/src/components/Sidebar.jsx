import React from "react";

export const Sidebar = ({ isOpen, toggleSidebar, onSelectCategory }) => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = (cat) => {
    onSelectCategory(cat);
    toggleSidebar(); // cierra al seleccionar
  };

  return (
    <>
      {/* Fondo oscuro */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 999,
          }}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className="bg-dark text-white vh-100 p-3 position-fixed top-0"
        style={{
          width: "300px",
          left: isOpen ? "0" : "-300px",
          paddingTop: "60px", 
          transition: "left 0.3s ease",
          zIndex: 1000,
        }}
      >
        <h3 className="text-center">Seleccione una categoria</h3>
        <hr className="text-white" />
        <ul className="nav flex-column mt-3">
          {categories.map((cat) => (
            <li className="nav-item" key={cat}>
              <button
                onClick={() => handleClick(cat)}
                className="btn w-100 mb-1 text-capitalize btn-dark text-white"
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
