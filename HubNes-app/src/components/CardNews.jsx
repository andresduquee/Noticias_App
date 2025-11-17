import React from "react";
import { ButtonNew } from "./ButtonNew";

export default function CardNews({ noticias }) {
  if (!noticias || noticias.length === 0) {
    return (
      <div className="text-center py-20">
        <svg
          width="120"
          height="120"
          viewBox="0 0 150 150"
          className="mx-auto mb-6"
        >
          <rect
            x="20"
            y="20"
            width="110"
            height="110"
            rx="10"
            fill="#E0E0E0"
            stroke="#B0B0B0"
            strokeWidth="3"
          />
          <rect x="35" y="35" width="80" height="10" rx="2" fill="#B0B0B0" />
          <rect x="35" y="55" width="60" height="10" rx="2" fill="#B0B0B0" />
          <rect x="35" y="75" width="70" height="10" rx="2" fill="#B0B0B0" />
          <rect x="35" y="95" width="50" height="10" rx="2" fill="#B0B0B0" />
          <line
            x1="30"
            y1="30"
            x2="120"
            y2="120"
            stroke="#FF4C4C"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="120"
            y1="30"
            x2="30"
            y2="120"
            stroke="#FF4C4C"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-xl font-semibold text-gray-600">
          No hay noticias disponibles
        </p>
      </div>
    );
  }

  return (
    <div className="container py-6 px-4 max-w-6xl mx-auto">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-lg-5 justify-content-center">
        {noticias.map((noticia, index) => (
          <div className="col" key={index}>
            <div className="card h-100 border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
             
              <div className="overflow-hidden bg-gray-200">
                <img
                  src={
                    noticia.urlToImage ||
                    noticia.image ||
                    "https://via.placeholder.com/600x360/E5E7EB/9CA3AF?text=Sin+Imagen"
                  }
                  className="w-100"
                  alt={noticia.title}
                  style={{
                    height: "160px",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x360/E5E7EB/9CA3AF?text=Sin+Imagen";
                  }}
                />
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className="card-body d-flex flex-column p-3">
                <h5
                  className="card-title fw-bold text-dark mb-2"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.3",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {noticia.title}
                </h5>
                <p
                  className="card-text text-muted small flex-grow-1 mb-3"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.45",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {noticia.description ||
                    noticia.content ||
                    "Esta noticia no incluye más información en la API."}
                </p>
                <div className="mt-auto">
                  <ButtonNew linkNoticia={noticia.url} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
