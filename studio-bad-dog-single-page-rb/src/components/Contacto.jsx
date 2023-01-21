//components
import FormContact from "./FormContact";
import Map from "./Map";
import Carrousel from "./Carrousel";

const Contacto = () => {
  return (
    <section id="contacto" className="pt-5 bg-color">
      <div className="container mb-5">
        <section className="row">
          <article className="col-12 text-center">
            <h1>¿Interesado?</h1>
            <p className="fs-5">¡Envíame tus comentarios!</p>
            <p className="fs-5">
              Para más información, puedes contactarme en
              <a href="mailto:axelorellana550@gmail.com">
                axelorellana550@gmail.com
              </a>
              .
            </p>
          </article>
          <FormContact />
          <Map />
        </section>
      </div>
      <Carrousel />
    </section>
  );
};

export default Contacto;
