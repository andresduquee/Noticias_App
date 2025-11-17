import React, { useState } from "react";
import { API_KEY, API_URL } from "../apiConfig";
import { ButtonNew } from "./ButtonNew"; 
export default function CardNews() {
  const [noticias, setNoticias] = useState([]);

  const obtenerNoticias = async ( SelCategory ) => {
    try {
      const res = await fetch(
        `${API_URL}q=bitcoin&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setNoticias(data.articles || []);
    } catch (error) {
    }
  };

  return (
    <div>
      <button type="button" onClick={obtenerNoticias} className="btn btn-dark mb-3">
        Cargar Noticias
      </button>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {noticias.map((n, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img
                src={n.urlToImage}
                className="card-img-top"
                alt={n.title}
              />
              <div className="card-body">
                <h5 className="card-title">{n.title}</h5>
                <p className="card-text">{n.description}</p>
                <ButtonNew linkNoticia={n.url}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
