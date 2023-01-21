//assets
import {
  workSlide1,
  workSlide2,
  workSlide3,
  workSlide4,
  workSlide5,
  workSlide6,
} from "../assets";

const UltimosProyectos = () => {
  return (
    <section id="sitios-ultimos-proyectos" className="pb-5">
      <div className="text-center">
        <h1>Sitios Web 100% Responsivos</h1>
        <p className="fs-5">
          Desarrollo sitios web de una sóla y de múltiples páginas.
        </p>
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={workSlide1} className="d-block w-100" alt="Trabajo 1" />
          </div>
          <div className="carousel-item">
            <img src={workSlide2} className="d-block w-100" alt="Trabajo 2" />
          </div>
          <div className="carousel-item">
            <img src={workSlide3} className="d-block w-100" alt="Trabajo 3" />
          </div>
          <div className="carousel-item">
            <img src={workSlide4} className="d-block w-100" alt="Trabajo 4" />
          </div>
          <div className="carousel-item">
            <img src={workSlide5} className="d-block w-100" alt="Trabajo 5" />
          </div>
          <div className="carousel-item">
            <img src={workSlide6} className="d-block w-100" alt="Trabajo 6" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default UltimosProyectos;
