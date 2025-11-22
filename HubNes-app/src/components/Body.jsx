import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_KEY } from "../apiConfig";

export default function Body() {
  const [recientes, setRecientes] = useState([]);

  useEffect(() => {
    const cargarNoticias = async () => {
      try {
        const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&apikey=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.articles && data.articles.length > 0) {
          setRecientes(data.articles.slice(1, 4));
        }
      } catch (error) {
        console.error("Error cargando noticias:", error);
      }
    };

    cargarNoticias();
  }, []);

  return (
    <section className="bg-white text-black py-5" style={{ paddingTop: "80px" }}>
      <div className="container">

        <div className="row align-items-center g-4">

          <div className="col-md-6">
            <div
              className="d-inline-flex align-items-center px-3 py-2 rounded-pill"
              style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
            >
              <span
                className="rounded-circle"
                style={{
                  width: 8,
                  height: 8,
                  background: "#000",
                  display: "inline-block",
                  marginRight: 10
                }}
              />
              <span className="fw-semibold small">EN VIVO</span>
            </div>

            <h1
              className="mt-3"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              Descubre las historias que están transformando el mundo
            </h1>

            <p className="text-secondary fs-5 mt-3">
              Mantente informado con los últimos eventos y análisis profundo sobre los temas que importan.
            </p>

          </div>

          {/* Imagen fija */}
          <div className="col-md-6">
            <div
              className="position-relative rounded overflow-hidden"
              style={{ height: "360px" }}
            >
              <img
                src="https://marketplace.canva.com/EAFrDm3ydqw/1/0/1600w/canva-presentaci%C3%B3n-noticias-telediario-corporativo-azul-rojo-Vh4S5Wt7FD4.jpg"
                alt="Página de noticias"
                className="w-100 h-100"
                style={{ objectFit: "cover", transition: "transform .3s ease" }}
              />
            </div>
          </div>

        </div>

        
        <h3 className="mt-5  fw-bold">Noticias Recientes</h3>

        <div className="row">
          {recientes.map((n, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="card h-100 shadow-sm">

                {n.image && (
                  <img
                    src={n.image}
                    alt="noticia"
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )}

                <div className="card-body d-flex flex-column">
                  <h6 className="fw-semibold">{n.title}</h6>

                  <p className="text-secondary small">
                    {n.description}
                  </p>

                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark mt-auto"
                  >
                    Leer más →
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
