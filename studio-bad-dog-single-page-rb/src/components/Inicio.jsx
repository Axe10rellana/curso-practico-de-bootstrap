//assets
import {
  headerImage,
  headerImage2,
  sitesIcon,
  clientsIcon,
  workflowIcon,
  aboutIcon,
} from "../assets";

const Inicio = () => {
  return (
    <section id="inicio" className="pt-5 bg-gradient-blue-green">
      <div className="container">
        <section className="row text-white align-items-lg-center mb-5">
          <article className="col-12 col-lg-5">
            <h2>¿Necesitas un increíble sitio web?</h2>
            <p className="fs-5">
              Un sitio hermoso, moderno, responsivo y personalizado para tu
              compañia, negocio, marca, servicio o producto.
            </p>
            <a className="btn btn-success btn-lg fw-bold" href="#servicios">
              ¡Sí, empecemos!
            </a>
          </article>
          <article className="col-12 col-lg-7">
            <img
              className="img-fluid"
              src={headerImage}
              alt="¿Necesitas un increíble sitio web?"
            />
          </article>
          <article className="col-12 col-lg-5 order-lg-1">
            <h2>Sitios web responsivos</h2>
            <p className="fs-5">
              Es importante proporcionar a tus visitantes una experiencia web
              óptima en dispositivos móviles. El diseño web responsivo significa
              que tu sitio se adapta instantáneamente al dispositivo que el
              visitante utiliza. ¡Mi trabajo es hacer, que la visita de tus
              usuarios sea lo más agradable e intuitiva para ellos!
            </p>
          </article>
          <article className="col-12 col-lg-7">
            <img
              className="img-fluid"
              src={headerImage2}
              alt="Sitios web responsivos"
            />
          </article>
        </section>
        <section
          id="servicios"
          className="row align-items-lg-center min-vh-100"
        >
          <article className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
              <img
                className="card-img-top bg-third-color"
                src={sitesIcon}
                alt="Nuevo sitio web"
              />
              <div className="card-body">
                <h5 className="card-title">Nuevo sitio web</h5>
                <p className="card-text">
                  ¿Necesitas un (nuevo) sitio web 100% responsivo?
                </p>
                <a href="#sitios-ultimos-proyectos" className="text-third">
                  Más detalles
                  <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
              <img
                src={clientsIcon}
                className="card-img-top bg-third-color"
                alt="Clientes"
              />
              <div className="card-body">
                <h5 className="card-title">Clientes</h5>
                <p className="card-text">
                  Clientes felices y proyectos hermosos.
                </p>
                <a href="#clientes" className="text-third">
                  Más detalles
                  <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
              <img
                src={workflowIcon}
                className="card-img-top bg-third-color"
                alt="Flujo de Trabajo"
              />
              <div className="card-body">
                <h5 className="card-title">Flujo de Trabajo</h5>
                <p className="card-text">
                  Escucho tus necesidades. Discutamos tu proyecto.
                </p>
                <a href="#comencemos" className="text-third">
                  Más detalles
                  <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
              <img
                src={aboutIcon}
                className="card-img-top bg-third-color"
                alt="¿Interesado?"
              />
              <div className="card-body">
                <h5 className="card-title">¿Interesado?</h5>
                <p className="card-text">Comencemos con tu nuevo proyecto.</p>
                <a href="#contacto" className="text-third">
                  Más detalles
                  <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Inicio;
