import React from "react";
import { ButtonNew } from "./ButtonNew";

export default function CardNews({ noticias }) {
  if (!noticias || noticias.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-secondary fs-5">No hay noticias disponibles</p>
      </div>
    );
  }

  return (
    <div className="row">
      {noticias.map((n, i) => (
        <div className="col-md-4 mb-3" key={i}>
          <div className="card h-100 shadow-sm rounded overflow-hidden">

            {n.image || n.urlToImage ? (
              <img
                src={n.image || n.urlToImage}
                alt="noticia"
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/600x360/E5E7EB/9CA3AF?text=Sin+Imagen")
                }
              />
            ) : (
              <div
                style={{
                  height: "180px",
                  background: "#e9ecef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#888",
                }}
              >
                Sin imagen
              </div>
            )}

            {/* Cuerpo */}
            <div className="card-body d-flex flex-column">
              <h6 className="fw-semibold" style={{ minHeight: "48px" }}>
                {n.title}
              </h6>

              <p className="text-secondary small" style={{ flexGrow: 1 }}>
                {n.description ||
                  n.content ||
                  "Esta noticia no incluye más información en la API."}
              </p>

             
              <div className="mt-auto">
                <ButtonNew linkNoticia={n.url} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
