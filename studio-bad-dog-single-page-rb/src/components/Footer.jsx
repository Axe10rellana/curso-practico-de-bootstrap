const Footer = () => {
  //Variables
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark p-3">
      <div className="container text-center">
        <nav className="d-flex justify-content-evenly align-items-center">
          <a
            href="https://www.linkedin.com/in/axel-orellana/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin fs-3"></i>
          </a>
          <a href="mailto:axelorellana550@gmail.com">
            <i className="bi bi-envelope-at fs-3"></i>
          </a>
          <a
            href="https://github.com/Axe10rellana"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github fs-3"></i>
          </a>
        </nav>
        <small className="text-white">
          &copy; {currentYear} Axe10rellana. Hecho con fines educativos, tomando
          inspiración del sitio {""}
          <a
            href="https://www.studiocorvus.com/"
            target="_blank"
            rel="noreferrer"
          >
            Studio Corvus
          </a>
          .
        </small>
      </div>
    </footer>
  );
};

export default Footer;
