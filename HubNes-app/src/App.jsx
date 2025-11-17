
import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import CardNews from "./components/CardNews";
import { API_KEY, API_URL } from "./apiConfig";

function App() {
  const [noticias, setNoticias] = useState([]);

  const obtenerNoticias = async (category) => {
    if (!category) return;
    try {
      const url = `${API_URL}top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
      console.log("Fetch URL:", url);
      const res = await fetch(url);
      if (!res.ok) {
        console.error("Error en la petición:", res.status);
        setNoticias([]);
        return;
      }
      const data = await res.json();
      setNoticias(data.articles || []);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
      setNoticias([]);
    }
  };

  return (
    <div>
      <Sidebar onSelectCategory={obtenerNoticias} />
      <div style={{ marginLeft: '300px', padding: '20px' }}>
        <CardNews noticias={noticias} />
      </div>
    </div>
  );
}

export default App;

