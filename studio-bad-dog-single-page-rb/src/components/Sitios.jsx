//components
import UltimosProyectos from "./UltimosProyectos";
import SinglePage from "./SinglePage";
import MultiPage from "./MultiPage";

const Sitios = () => {
  return (
    <section className="pt-5 bg-color">
      <UltimosProyectos />
      <SinglePage />
      <MultiPage />
    </section>
  );
};

export default Sitios;
