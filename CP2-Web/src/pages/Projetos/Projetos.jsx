import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function CardProjeto({ projeto }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDetails = () => setIsOpen(!isOpen);

    return (
        <div className="m-4 p-4 border rounded shadow-lg hover:bg-gray-100 cursor-pointer" onClick={toggleDetails}>
            <h3 className="text-lg font-bold">{projeto.nome}</h3>
            <p>{projeto.descricaoCurta}</p>
            {isOpen && (
                <div>
                    <p>{projeto.descricaoCompleta}</p>
                    {projeto.imagem && <img src={projeto.imagem} alt={projeto.nome} className="w-full mt-4" />}
                </div>
            )}
        </div>
    );
}

function Projeto() {
    const projetos = [
        {
            id: 1,
            nome: 'Chatificar',
            descricaoCurta: 'Sala de bate-papo pessoal ou espaço de trabalho para compartilhar recursos e hangout com amigos criados com react.js, Material-UI e Firebase. Possui recursos que permitem ao usuário mensagens em tempo real, compartilhamento de imagens e também suporta reações nas mensagens..',
            imagem: 'https://github.com/soumyajit4419/Chatify'
        },
        {
            id: 2,
            nome: 'Bits-0f-C0de',
            descricaoCurta: 'Minha página de blog pessoal foi construída com Next.js e Tailwind Css, que pega o conteúdo dos arquivos makdown e o renderiza usando Next.js. Suporta modo escuro e é fácil de escrever blogs usando markdown.',
            imagem: 'url-da-imagem.jpg'
        },
        {
            id: 3,
            nome: 'Editor.io',
            descricaoCurta: 'Código online e editor de markdown construído com react.js. Editor online que suporta código HTML, CSS e JS com visualização instantânea do site. Editor de markdown on-line para criar arquivo README que suporta GFM, tags HTML personalizadas com barra de ferramentas e visualização instantânea. Ambos os editores suportam salvamento automático de trabalho usando armazenamento local.',
            imagem: 'url-da-imagem.jpg'
        },
        {
            id: 4,
            nome: 'Projeto 4',
            descricaoCurta: 'Breve descrição do Projeto 4.',
            imagem: 'url-da-imagem.jpg'
        },
        {
            id: 5,
            nome: 'Projeto 5',
            descricaoCurta: 'Breve descrição do Projeto 5.',
            imagem: 'url-da-imagem.jpg'
        },
        {
            id: 6,
            nome: 'Projeto 6',
            descricaoCurta: 'Breve descrição do Projeto 6.',
            imagem: 'url-da-imagem.jpg'
        },
       
    ];

    return (
        <>
            <Header />
            <h1 className="text-8xl flex justify-center items-center p-10">Projetos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {projetos.map(projeto => (
                    <CardProjeto key={projeto.id} projeto={projeto} />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Projeto;
