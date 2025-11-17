import React, { useState } from "react";
import Header from "./components/header";
import CardNews from "./components/CardNews";
import Footer from "./components/footer";
import { API_KEY } from "./apiConfig";

function App() {
  const [noticias, setNoticias] = useState([]);

  // Función que se pasa al Sidebar para traer noticias
  const obtenerNoticias = async (category) => {
    try {
      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&apikey=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setNoticias(data.articles || []);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      setNoticias([]);
    }
  };

  return (
    <div>
      {/* Header recibe la función para pasar al sidebar */}
      <Header onSelectCategory={obtenerNoticias} />

      {/* Contenido principal */}
      <div className="mt-4" style={{ paddingTop: "60px", paddingLeft: "20px", paddingRight: "20px" }}>
        <CardNews noticias={noticias} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
