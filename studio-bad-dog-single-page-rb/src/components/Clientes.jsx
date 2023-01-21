//components
import Testimonios from "./Testimonios";

const Clientes = () => {
  return (
    <section id="clientes" className="pt-5 bg-color">
      <div className="container">
        <section className="row g-0">
          <article className="col-12 text-center">
            <h1>Clientes & Colaboraciones</h1>
            <p className="fs 5">
              Aquí hay una selección de clientes felices y hermosos proyectos.
            </p>
          </article>
          <Testimonios />
        </section>
      </div>
    </section>
  );
};

export default Clientes;
