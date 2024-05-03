import {TiSocialInstagram} from 'react-icons/ti'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

function Footer () {
    return (
        <footer className="w-full h-14 bg-slate-950  text-white flex items-center justify-between px-8">
           <p className='justify-start'> Projetado e desenvolvido por Grupo 4 Dia de Entregar 03/05/24 </p>
            <ul className='flex space-x-4 items-center justify-between'>
                <li className='text-base text-pink-600'> <TiSocialInstagram /> </li>
                <li className='text-base text-pink-600'> <SlSocialLinkedin /> </li>
                <li className='text-base text-pink-600'> <FiGithub /></li>
            </ul>
        </footer>
    )
}

export default Footer