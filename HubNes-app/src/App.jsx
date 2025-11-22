import React, { useState } from "react";
import Header from "./components/header";
import CardNews from "./components/CardNews";
import Footer from "./components/footer";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_KEY } from "./apiConfig";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Cambiar categoría y traer noticias
  const obtenerNoticias = async (category) => {
    try {
      setCategoriaSeleccionada(category); 

      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&apikey=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setNoticias(data.articles || []);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      setNoticias([]);
    }
  };

  // Volver al Home (Body)
  const volverInicio = () => {
    setCategoriaSeleccionada(null);
    setNoticias([]);
  };

  return (
    <div>

      <Header 
        onSelectCategory={obtenerNoticias} 
        onInicio={volverInicio}
      />
      {/* Mostrar Body solo si NO hay categoría */}
      <div className="mt-5">
      {!categoriaSeleccionada && <Body />}
      </div>

      {/* Mostrar noticias solo si hay categoría seleccionada */}
      {categoriaSeleccionada && (
        <div className="mt-4" style={{ paddingTop: "60px", paddingLeft: "20px", paddingRight: "20px" }}>
          <h2 className="fw-bold mb-4 text-capitalize">
            {categoriaSeleccionada}
          </h2>

          <CardNews noticias={noticias} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
