import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export default function Header({ onSelectCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className="position-fixed top-0 start-0 w-100 d-flex align-items-center"
        style={{
          height: "60px",
          backgroundColor: "#1f2225ff",
          zIndex: 1000,
          color: "white",
          justifyContent: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "1.8rem",
          fontWeight: 700,
          cursor: "pointer",
        }}
        onClick={() => onSelectCategory(null)} 
      >
        {/* Botón hamburguesa */}
        <button
          className="btn btn-dark position-absolute start-0 ms-3"
          style={{ zIndex: 1001 }}
          onClick={(e) => {
            e.stopPropagation(); 
            toggleSidebar();
          }}
        >
          ☰
        </button>

        HubNews
      </header>

      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        onSelectCategory={onSelectCategory}
      />
    </>
  );
}
