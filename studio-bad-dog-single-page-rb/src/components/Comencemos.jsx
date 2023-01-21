//components
import ComenzarProyecto from "./ComenzarProyecto";

const Comencemos = () => {
  return (
    <section id="comencemos" className="pt-5 bg-color">
      <div className="container">
        <article className="text-center">
          <h1>Comencemos tu nuevo proyecto</h1>
          <p className="fs-5">
            Me encanta la colaboración mutua entre <b>profesional-cliente</b>,
            prefiero la frase:
          </p>
          <p className="fs-2">
            <b>
              <i>"Trabajo contigo"</i>
            </b>
            .
          </p>
          <p className="fs-5">
            En vez de: <b>Trabajo para ti</b>.
          </p>
          <p className="text-start">
            Me gusta tener contacto directo con el cliente, lo que permite una
            comunicación clara y actualizaciones periódicas del proyecto,
            haciendo todo lo posible para no causar demoras. Intento definir las
            características y experiencias más adecuadas que brinden la máxima
            satisfacción.
          </p>
          <p className="text-start">
            Me parece importante ofrecer a mis clientes una comprensión clara de
            lo que pueden y deben esperar de mí. Si trabajamos juntos en su
            sitio web, el proceso será como se describe a continuación:
          </p>
        </article>
        <ComenzarProyecto />
        <article>
          <p className="text-center">
            <small>
              <sup className="text-first-color fw-bold">*</sup> Todo cambio
              adicional generará cargos extras. Tarifa por hora:
              <b>150usd + impuestos</b>.
            </small>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Comencemos;
