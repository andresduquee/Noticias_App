import { Icon } from "@iconify/react";

export const Header = () => {
  return (
    <header className="bg-dark sticky-top shadow-sm w-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#">
            <span className="badge bg-primary rounded p-2 me-2">N</span>
            NewsHub
          </a>
        </div>
      </nav>
    </header>
  );
};
