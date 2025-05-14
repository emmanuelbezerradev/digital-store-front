import camiseta from "../assets/camiseta.png"
import tenis from "../assets/tenis-2.png"
import fone from "../assets/fone.png"

const SectionDestaques = () => {
    return ( 
        <>
        <section id="destaques">
        <h3>Coleções em destaque</h3>
        <div className="colecoes">
          <div>
            <div className="conteudo">
              <h6>30% OFF</h6>
              <h2>Novo drop <br />Supreme</h2>
              <a href="" className="btn inverso">Comprar</a>
            </div>

            <img src={camiseta} alt="camiseta" />
          </div>
          <div>
            <div className="conteudo">
              <h6>30% OFF</h6>
              <h2>Coleção <br />Adidas</h2>
              <a href="" className="btn inverso">Comprar</a>
            </div>
            <img src={tenis} alt="tenis Adidas" />
          </div>
          <div>
            <div className="conteudo">
              <h6>30% OFF</h6>
              <h2>Novo <br />Beats Bass</h2>
              <a href="" className="btn inverso">Comprar</a>
            </div>
            <img src={fone} alt="fone" />
          </div>
        </div>
        <h3>Departamento</h3>
        <div className="departamentos">
          <div>
            <div className="icon">
              <img src="img/blusa.svg" alt="blusa" />
            </div>
            Camisetas
          </div>
          <div>
            <div className="icon">
              <img src="img/calça.svg" alt="blusa" />
            </div>
            Calças
          </div>
          <div>
            <div className="icon">
              <img src="img/cap.svg" alt="boné" className="bone" />
            </div>
            boné
          </div>
          <div>
            <div className="icon">
              <img src="img/headset.svg" alt="headset" />
            </div>
            Headsets
          </div>
          <div>
            <div className="icon">
              <img src="img/tenis.svg" alt="tenis" />
            </div>
            Tênis
          </div>
        </div>
      </section>
      </>
     );
}
 
export default SectionDestaques;