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
      <div className="pl-10 pr-10 pt-10">
        <h1 className="text-white font-bold ml-14"> DEIXE-ME NOS APRESENTAR </h1>
        <div className='bg-magenta h-1 w-24 ml-14 mb-4'></div>
        <p className="text-white font-extralight mb-12">SOMOS DEVS EM FORMAÇÃO, SOMOS DO GRUPO 4 DO 1ESPB  (ENGENHARIA DE SOFTWARE), TEMOS MUITO INTERESSE POR TECNOLOGIAS NOVAS E SEMPRE PROCURAMOS NOS APROFUNDAR CADA VEZ MAIS NOS ASSUNTOS QUE ESTAMOS APRENDENDO</p>  
        <br />
        <p className="text-white font-bold ml-14">PARA ENTRAR EM CONTATO COM NOS BASTA UTILIZAR OS EMAILS ABAIXO</p>
        <div className='bg-magenta h-1 w-24 ml-14 mb-8'></div>
        <div className="flex flex-col gap-5 p-4 border border-magenta">
          <p className="text-white">Pedro Melo - rm554223@fiap.com.br</p>
          <p className="text-white">Henrique Rafael - rm553945@fiap.com.br</p>
          <p className="text-white">Gustavo Gouvea - rm553842@fiap.com.br</p>
        </div>
      </div>
      

      <Footer />
    </>
  );
}

export default Home;
