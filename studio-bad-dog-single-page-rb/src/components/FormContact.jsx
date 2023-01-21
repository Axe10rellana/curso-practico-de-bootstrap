//react
import { useState } from "react";

//assets
import { loaderSvg } from "../assets";

const FormContact = () => {
  //state variables
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    fetch("https://formsubmit.co/ajax/axelorellana550@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        location.hash = "#gracias";
        e.target.reset();
      })
      .catch((err) => {
        let message =
          err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
        setError(`Error ${err.status}: ${message}`);
      })
      .finally(() => {
        setLoader(false);
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  };

  return (
    <article className="col-12 col-lg-6 order-lg-1">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nombre:
          </label>
          <input
            className="form-control"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Nombre"
            type="text"
            title="Nombre sólo acepta letras y espacios en blanco"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            type="email"
            title="Email incorrecto"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="comments">
            Comentarios:
          </label>
          <textarea
            className="form-control resize-none"
            rows="5"
            id="comments"
            name="comments"
            placeholder="Escribe tus comentarios"
            required
          ></textarea>
        </div>
        <div
          id="contact-form-loader"
          className={`text-center ${loader === false ? "d-none" : "d-block"}`}
        >
          <img src={loaderSvg} alt="loading..." />
        </div>
        <div className="mb-3">
          <input className="btn btn-lg btn-success text-white" type="submit" />
        </div>
      </form>
      <div className="formsubmit-modal" id="gracias">
        <div className="formsubmit-modal-content">
          <article className="formsubmit-contact-form-response">
            <h3 className="display-5">{error === "" ? "GRACIAS!!!" : error}</h3>
            <p className="fs-5">Muchas gracias por tus comentarios.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z" />
              <path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
              <path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z" />
            </svg>
          </article>
        </div>
      </div>
    </article>
  );
};

export default FormContact;
