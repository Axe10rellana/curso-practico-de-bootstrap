//assets
import { about1, about2, about3, about4 } from "../assets";

const Carrousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={about1} className="d-block w-100" alt="Acerca 1" />
          <div className="carousel-caption bg-second-alpha-color">
            <article>
              <aside>
                <p className="fs-4">
                  <b>Axel Orellana</b>,
                </p>
                <p className="fs-5 d-none d-sm-block">Desarrollador Web.</p>
              </aside>
              <aside className="d-none d-md-block">
                <p>
                  Comencé a crear sitios y aplicaciones web en <b>2023</b>.
                </p>
                <p>
                  Valoro mucho el concepto de{" "}
                  <em>
                    "<b>menos es más</b>"
                  </em>
                  .
                </p>
                <p>Trabajo de forma remota e independiente.</p>
              </aside>
            </article>
          </div>
        </div>
        <div className="carousel-item">
          <img src={about2} className="d-block w-100" alt="Acerca 2" />
        </div>
        <div className="carousel-item">
          <img src={about3} className="d-block w-100" alt="Acerca 3" />
        </div>
        <div className="carousel-item">
          <img src={about4} className="d-block w-100" alt="Acerca 4" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon white"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;
