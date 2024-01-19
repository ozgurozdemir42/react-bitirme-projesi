import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";


function Home() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero"
        heroimg="https://www.meram.bel.tr/upload/medya/MRM_4711_1.jpg"
        title="Senin Belediyen"
        text="Pöpüler Sosyal Tesisler"
        btnclass="show"
        url="/"
        buttontext="Belediyeni Keşfet"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
