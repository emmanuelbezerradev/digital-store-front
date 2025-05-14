import logoB from "../assets/logo-branco.png"

const SectionFooter = () => {
    return ( 
        <footer>
      <div className="rodape">
        <div className="conteudo">
          <img src={logoB} alt="Digital Store" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            quisquam a saepe, iste mollitia ipsa culpa ullam nisi dicta dolor
            dolorem id, excepturi aut facere tenetur consequuntur labore. Quam,
            voluptatum.
          </p>

          <div className="redes">
            <a href=""><box-icon type="logo" name="facebook"></box-icon></a>
            <a href=""><box-icon type="logo" name="instagram"></box-icon></a>
            <a href=""><box-icon type="logo" name="twitter"></box-icon></a>
          </div>
        </div>
        <div className="sitemap">
          <div>
            <h5>informação</h5>
            <a href="">Sobre Drip Store</a>
            <a href="">Segurança</a>
            <a href="">Wishlist</a>
            <a href="">Blog</a>
            <a href="">Trabalhe conosco</a>
            <a href="">Meus Pedidos</a>
          </div>
          <div>
            <h5>Categorias</h5>
            <a href="">Camisetas</a>
            <a href="">Calças</a>
            <a href="">Bonés</a>
            <a href="">Headphones</a>
            <a href="">Tênis</a>
          </div>
          <div>
            <h5>Contato</h5>
            <a href="https://www.google.com/maps?q=Av.+Santos+Dumont,+1510+-+1+andar+-+Aldeota,+Fortaleza+-+CE+60150-161" target="_blank" rel="noopener noreferrer">
              <address>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE 60150-161
              </address>
            </a>
            <a href="tel:8530513411">(85) 3051-3411</a>
          </div>
        </div>
      </div>
      <h6>&copy; 2025 Todos os direitos reservados. 
        <br></br>Feito por: <a href="https://www.linkedin.com/in/emmanuelbezerradev/" target="_blank">Emmanuel Bezerra Dev &reg;</a></h6>
    </footer>
     );
}
 
export default SectionFooter;