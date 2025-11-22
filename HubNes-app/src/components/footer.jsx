import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3 border-top border-secondary">
      <div className="container">
        <div className="row mb-4">

          {/* About */}
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="bg-white text-dark fw-bold d-flex justify-content-center align-items-center rounded"
                style={{ width: "40px", height: "40px" }}
              >
                H
              </div>
              <span className="fs-5 fw-bold">Noticias HubNews</span>
            </div>

            <p className="text-secondary small">
              Tu fuente confiable de noticias e información actualizada.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <p className="text-secondary small mb-1">📧 HubNews@ciaf.edu.co</p>
            <p className="text-secondary small mb-1">📞 +57</p>
            <p className="text-secondary small">📍 Risaralda, Pereira</p>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="d-flex justify-content-between text-secondary small flex-wrap">
          <p className="mb-0">© 2025 Hubnews. Página con fines educativos.</p>

          <div className="d-flex gap-2">
            <p className="text-secondary mb-0">Creado por:</p>
            <p className="text-secondary mb-0">Jorge Ivan -</p>
            <p className="text-secondary mb-0">Bryan Mayo -</p>
            <p className="text-secondary mb-0">Andres Marulanda -</p>
            <p className="text-secondary mb-0">Andres Duque</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
