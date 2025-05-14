import Header from "./components/Header";
import SectionBanner from "./components/SectionBanner";
import SectionDestaques from "./components/SectionDestaques";
import SectionFooter from "./components/SectionFooter";
import SectionOferta from "./components/SectionOferta";
import SectionProdutos from "./components/SectionProdutos";
const App = () => {
  return ( 
    <>
    <main>
    <Header/>;
    <SectionBanner/>;
    </main>
    <SectionDestaques/>;
    <SectionProdutos/>;
    <SectionOferta/>;
    <SectionFooter/>;
   </>
   );

}
 
export default App;
