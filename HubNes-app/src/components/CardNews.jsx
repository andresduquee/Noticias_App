import React from "react";
import { ButtonNew } from "./ButtonNew";

export default function CardNews({ noticias }) {
  if (!noticias || noticias.length === 0) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >

        <rect x="20" y="20" width="110" height="110" rx="10" ry="10" fill="#E0E0E0" stroke="#B0B0B0" strokeWidth="3" />
        

        <rect x="35" y="35" width="80" height="10" rx="2" ry="2" fill="#B0B0B0" />
        <rect x="35" y="55" width="60" height="10" rx="2" ry="2" fill="#B0B0B0" />
        <rect x="35" y="75" width="70" height="10" rx="2" ry="2" fill="#B0B0B0" />
        <rect x="35" y="95" width="50" height="10" rx="2" ry="2" fill="#B0B0B0" />


        <line x1="30" y1="30" x2="120" y2="120" stroke="#FF4C4C" strokeWidth="8" strokeLinecap="round" />
        <line x1="120" y1="30" x2="30" y2="120" stroke="#FF4C4C" strokeWidth="8" strokeLinecap="round" />


        <text
          x="75"
          y="145"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
          fill="#555"
        >
          No hay noticias
        </text>
      </svg>
    </div>;
  }

  return (
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
  );
}
