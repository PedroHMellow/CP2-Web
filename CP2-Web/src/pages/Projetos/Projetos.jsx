import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function CardProjeto({ projeto }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDetails = () => setIsOpen(!isOpen);

    return (
        <div className="m-4 p-4 border border-magenta rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-magenta hover:text-black" onClick={toggleDetails}>
            <h3 className="text-lg font-bold">{projeto.nome}</h3>
            <p>{projeto.descricaoCurta}</p>
            {isOpen && (
                <div>
                    <p>{projeto.descricaoCompleta}</p>
                    {projeto.imagem && <img src={projeto.imagem} alt={projeto.nome} className="w-full mt-4" />}
                </div>
            )}
            <a href={projeto.link} className="block text-blue-500 hover:underline mt-4">Saiba mais</a>
        </div>
    );
}

function Projeto() {
    const projetos = [
        {
            id: 1,
            nome: 'Chatificar',
            descricaoCurta: 'Sala de bate-papo pessoal ou espaço de trabalho para compartilhar recursos e hangout com amigos criados com react.js, Material-UI e Firebase. Possui recursos que permitem ao usuário mensagens em tempo real, compartilhamento de imagens e também suporta reações nas mensagens.',
            link: 'https://github.com/soumyajit4419/Chatify'
        },
        {
            id: 2,
            nome: 'Bits-0f-C0de',
            descricaoCurta: 'Minha página de blog pessoal foi construída com Next.js e Tailwind Css, que pega o conteúdo dos arquivos makdown e o renderiza usando Next.js. Suporta modo escuro e é fácil de escrever blogs usando markdown.',
            link: 'https://github.com/seu-usuario/seu-projeto'
        },
        {
            id: 3,
            nome: 'Editor.io',
            descricaoCurta: 'Código online e editor de markdown construído com react.js. Editor online que suporta código HTML, CSS e JS com visualização instantânea do site. Editor de markdown on-line para criar arquivo README que suporta GFM, tags HTML personalizadas com barra de ferramentas e visualização instantânea. Ambos os editores suportam salvamento automático de trabalho usando armazenamento local.',
            link: 'https://github.com/seu-usuario/seu-projeto'
        },
        {
            id: 4,
            nome: 'Planta IA',
            descricaoCurta: 'Usei o conjunto de dados de doenças de plantas do Kaggle e treinei um modelo de classificador de imagens usando a estrutura PyTorch usando CNN e Transfer Learning com 38 classes de várias folhas de plantas. O modelo foi capaz de detectar com sucesso folhas doentes e saudáveis ​​de 14 plantas únicas. Consegui atingir uma precisão de 98% usando o modelo pré-treinado Resnet34.',
            link: 'https://github.com/seu-usuario/seu-projeto'
        },
        {
            id: 5,
            nome: 'IA para o bem social',
            descricaoCurta: 'Utilizar Processamento de Linguagem Natural para detectar postagens relacionadas ao suicídio e ideação suicida de usuários no ciberespaço e assim ajudar na prevenção do suicídio.',
            link: 'https://github.com/seu-usuario/seu-projeto'
        },
        {
            id: 6,
            nome: 'Reconhecimento facial e detecção de emoções',
            descricaoCurta: 'reinei um classificador CNN usando conjunto de dados FER-2013 com Keras e tensorflow apoiado. O classificador previu com sucesso os vários tipos de emoções humanas. E a maior precisão obtida com o modelo foi de 60,1%. Em seguida, usei o Open-CV para detectar o rosto em uma imagem e depois passar o rosto para o classificador para prever a emoção de uma pessoa.',
            link: 'https://github.com/seu-usuario/seu-projeto'
        },
    ];

    return (
        <>
            <Header />
            <div className='flex flex-col items-start gap-10 pr-10 pl-10'>
                <h1 className="text-6xl ml-14 font-semibold pt-20  text-gray-400">Projetos</h1>
                <div className='bg-magenta h-1 w-24 ml-14 mb-8'></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto text-gray-400">
                    {projetos.map(projeto => (
                        <CardProjeto key={projeto.id} projeto={projeto} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Projeto;
