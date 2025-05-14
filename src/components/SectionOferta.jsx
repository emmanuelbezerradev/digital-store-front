import tenisG from "../assets/produto-oferta.png"

const SectionOferta = () => {
    return ( 
        <section id="oferta">
        <div>
          <div className="produto-detalhe"></div>
          <img src={tenisG} alt="" className="produto-oferta" />
        </div>
        <div className="flex-1">
          <h6>Oferta especial</h6>
          <h2>
            Air Jordan edição de <br />
            colecionador
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            fugiat minus cupiditate ab itaque accusantium ea aut consequatur
            ducimus odio, reiciendis repellendus, adipisci obcaecati? Eligendi
            quas dicta perferendis consequuntur nisi.
          </p>
          <a href="" className="btn">Ver Oferta</a>
        </div>
      </section> 
     );
}
 
export default SectionOferta;