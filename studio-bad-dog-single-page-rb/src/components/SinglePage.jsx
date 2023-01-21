const SinglePage = () => {
  return (
    <section
      id="sitios-single-page"
      className="min-vh-100 bg-hero-image-single"
    >
      <article className="min-vh-100 bg-alpha-color d-flex align-items-center">
        <div className="container">
          <article className="col-12 col-lg-6 offset-lg-6">
            <a
              className="btn btn-lg btn-success text-white mb-5"
              href="#contacto"
            >
              <b>
                Desde $400 <small>USD</small>
              </b>
            </a>
            <h2>Sitio de una sola página</h2>
            <small>
              El precio puede ser más bajo (o más alto) dependiendo de los
              requisitos de su proyecto.
            </small>
            <p className="my-5 fs-5">
              Una <b>sola página</b> o <b>página de destino</b> es un sitio web
              que consta de una página. Perfecto para presentar a tu empresa,
              organización, producto o servicio de una manera hermosa y moderna
              en Internet.
            </p>
            <a className="fs-4 fw-bold" href="#contacto">
              Solicite una cotización ahora
              <i className="bi bi-chevron-right"></i>
            </a>
            <div className="row mt-5">
              <div className="col">
                <p>
                  <i className="bi bi-check-lg"></i> Sitio web de una sola
                  página.
                </p>
                <p>
                  <i className="bi bi-check-lg"></i> 100% Responsivo.
                </p>
                <p>
                  <i className="bi bi-check-lg"></i> Diseño personalizado.
                </p>
              </div>
              <div className="col">
                <p>
                  <i className="bi bi-check-lg"></i> Corrección de estilo.
                </p>
                <p>
                  <i className="bi bi-check-lg"></i> Edición de imágenes.
                </p>
                <p>
                  <i className="bi bi-check-lg"></i> Soporte.
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};

export default SinglePage;
