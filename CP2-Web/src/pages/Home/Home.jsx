import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <>
      <Header />
      <div>Foto genérica só pra simular espaço</div>
      <figure>
        <img
          src="../public/Portfolio-Desenvolvedor-Web.webp"
          alt="Imagem teste"
          className="w-full"
        />
      </figure>
      <Footer />
    </>
  );
}

export default Home 