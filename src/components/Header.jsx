import logo from "../assets/logo.png";
import lupa from "../assets/lupa.png";
import carrinho from "../assets/carrinho.png";

const Header  = () => {
    return ( 
        <header>
      <div className="topo">
        <div className="logo">
          <img src={logo} alt="logo" />Digital Store
        </div>
        <div className="buscador">
          <input type="text" placeholder="Pesquisar produto..." />
          <img src={lupa} alt="lupa" />
        </div>
        <div className="acoes">
          <a href="">Cadastre-se</a>
          <a className="btn" href="">Entrar</a>

          <div className="carrinho">
            <img src={carrinho} alt="carrinho" />
            <span>2</span>
          </div>
        </div>
      </div>
      <nav>
        <a href="http://" className="active">Home</a>
        <a href="http://">Produtos</a>
        <a href="http://">Categorias</a>
        <a href="http://">Meus Pedidos</a>
      </nav>
    </header>
     );
}
 
export default Header ;