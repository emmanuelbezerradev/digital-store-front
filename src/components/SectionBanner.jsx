import banner from "../assets/banner.png";
import brilho from "../assets/brilho.png";

const SectionBanner = () => {
  return (
    <>
      <section id="banner">
        <div className="conteudo">
          <h6>Melhores ofertas personalizadas</h6>
          <h2>
            Queima de
            <br />
            estoque Nike 🔥
          </h2>
          <p>
            Consequat culpa exercitation mollit nisi excepteur do
            <br />
            do tempor laboris eiusmod irure consectetur.
          </p>
          <a href="" className="btn">
            Ver Ofertas
          </a>
        </div>
          <img src={brilho} alt="" className="detalhe" />
          <img src={banner} alt="" className="tenis" />
      </section>
    </>
  );
};

export default SectionBanner;
