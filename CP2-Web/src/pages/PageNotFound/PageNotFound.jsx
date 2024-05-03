import { BsEmojiFrownFill } from "react-icons/bs";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


function PageNotFound() {
    return ( 
        <>

            <div className="bg-preto_header h-screen p-36">
                <div className=" flex justify-center text-8xl text-pink-600 p-3">
                    <BsEmojiFrownFill />
                </div>
                <h1 className="flex text-6xl text-white	justify-center items-center p-1">
                    Page Not Found 404
                </h1>
                <div className="flex justify-center items-center p-5"> 
                    <Link to="/">
                        <button className="w-60 p-2 border-2 bg-pink-600 border-solid rounded-full"> 
                            <span className="text-white text-xl"> Clique pra Voltar </span>
                            <div className="flex justify-center text-3xl text-white">
                                <FaArrowAltCircleLeft />    
                            </div> 
                        </button>
                    </Link>
                </div>
            </div>

        </>
        
     );
}

export default PageNotFound;