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
      
      <h1 className="text-white"> DEIXE-ME NOS APRESENTAR </h1>
      <p className="text-white">SOMOS DEVS EM FORMAÇÃO, SOMOS DO GRUPO 4 DO 1ESPB  (ENGENHARIA DE SOFTWARE), TEMOS MUITO INTERESSE POR TECNOLOGIAS NOVAS E SEMPRE PROCURAMOS NOS APROFUNDAR CADA VEZ MAIS NOS ASSUNTOS QUE ESTAMOS APRENDENDO</p>  
      <br />
      <p className="text-white">PARA ENTRAR EM CONTATO COM NOS BASTA UTILIZAR OS EMAILS A BAIXO</p>
      <br />
      <p className="text-white">Pedro Melo - rm554223@fiap.com.br</p>
      <br />
      <p className="text-white">Henrique Rafael - rm553945@fiap.com.br</p>
      <br />
      <p className="text-white">Gustavo Gouvea - rm553842@fiap.com.br</p>

      <Footer />
    </>
  );
}

export default Home;
