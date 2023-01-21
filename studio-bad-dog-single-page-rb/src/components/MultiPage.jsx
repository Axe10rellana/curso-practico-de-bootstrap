const MultiPage = () => {
  return (
    <section id="sitios-multi-page" className="min-vh-100 bg-hero-image-multi">
      <article className="min-vh-100 bg-alpha-color d-flex align-items-center">
        <div className="container">
          <article className="col-12 col-lg-6">
            <a
              className="btn btn-lg btn-success text-white mb-5"
              href="#contacto"
            >
              <b>
                Desde $1,000 <small>USD</small>
              </b>
            </a>
            <h2>Sitio multipágina</h2>
            <small>
              El precio puede ser más bajo (o más alto) dependiendo de los
              requisitos de su proyecto.
            </small>
            <p className="my-5 fs-5">
              Un <b>sitio web de varias páginas</b> consta de dos o más páginas.
              Este formato es útil si tiene ciertos elementos que desea mantener
              separados por páginas y urls diferentes.
            </p>
            <a className="fs-4 fw-bold" href="#contacto">
              Solicite una cotización ahora
              <i className="bi bi-chevron-right"></i>
            </a>
            <div className="row mt-5">
              <div className="col">
                <p>
                  <i className="bi bi-check-lg"></i> 2 a 6 páginas.
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

export default MultiPage;
