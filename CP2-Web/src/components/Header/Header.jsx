import { SiReact } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { Link } from "react-router-dom";


function Header () {
    return (
        <header className="w-full pt-5 pb-5  bg-preto_header text-white flex items-center justify-around fixed">
            <Link to="/">
                <div className="text-3xl text-pink-600"> <SiReact /> </div>
            </Link>
            <nav className="flex space-x-4 ">
                <div className="flex items-center space-x-2">

                    <FaHome />

                    <Link to="/" className="font-Raleway text-lg font-bold"> Home </Link>

                </div>
                <div className="flex items-center space-x-2"> 

                    <AiOutlineFundProjectionScreen />

                    <Link to="/Projetos" className="font-Raleway text-lg font-bold"> Projeto </Link>

                </div>
                <div className="flex items-center space-x-2">

                    <IoMdContacts />
                    <Link to="/Contatos" className="font-Raleway text-lg font-bold"> Contato </Link>

                </div>
                
            </nav>

        </header>
    )

}

export default Header

