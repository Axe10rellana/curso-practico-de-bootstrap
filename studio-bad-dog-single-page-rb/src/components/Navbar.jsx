//assets
import { badDogStudioLogo } from "../assets";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark sticky-top navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={badDogStudioLogo} alt="Studio Bad Dog" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sitios
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#sitios-ultimos-proyectos">
                    Ultimos Proyectos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#sitios-single-page">
                    Sitio <i>Single Page</i>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#sitios-multi-page">
                    Sitio <i>Multi Page</i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clientes">
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#comencemos">
                Comencemos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
