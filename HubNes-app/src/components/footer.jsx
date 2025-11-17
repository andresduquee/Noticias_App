import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function footer() {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Columna 1 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Noticias Hoy</h5>
            <p>
              Tu portal de confianza para mantenerte informado con las últimas
              noticias nacionales e internacionales.
            </p>
          </div>

          {/* Columna 2 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Secciones</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Política</a></li>
              <li><a href="#" className="text-white text-decoration-none">Economía</a></li>
              <li><a href="#" className="text-white text-decoration-none">Deportes</a></li>
              <li><a href="#" className="text-white text-decoration-none">Tecnología</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Contacto</h5>
            <p className="mb-1">📧 contacto@noticiashoy.com</p>
            <p>📍 Pereira, Colombia</p>
            <div>
              <a href="#" className="text-white me-3 fs-5">🌐</a>
              <a href="#" className="text-white me-3 fs-5">📘</a>
              <a href="#" className="text-white fs-5">🐦</a>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="text-center py-3 border-top border-secondary mt-3">
          © {new Date().getFullYear()} Noticias Hoy - Pagina con fines educativos
        </div>
      </div>
    </footer>
  )
}

