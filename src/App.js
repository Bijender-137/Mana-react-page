import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import AsFeatureDin from "./components/AsFeatureDin";
import FeaturedHomes from "./components/FeaturedHomes";
import MainSection from "./components/MainSection";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import OwnerRepresent from "./components/OwnerRepresent";
import Ownthejoy from "./components/Ownthejoy";
import RadioSection from "./components/RadioSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyHeader />
      <MainSection />
      <FeaturedHomes />
      <Ownthejoy />
      <OwnerRepresent />
      <RadioSection />
      <AsFeatureDin />
     <Footer/>
    </>
  );
}

export default App;
