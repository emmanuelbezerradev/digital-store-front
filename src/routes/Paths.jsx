import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import Produtos from "../pages/Produtos";
import Categorias from "../pages/Categorias";
import MeusPedidos from "../pages/MeusPedidos";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produtos/>} />
                <Route path="/categorias" element={<Categorias/>} />
                <Route path="/meus-pedidos" element={<MeusPedidos/>} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;
