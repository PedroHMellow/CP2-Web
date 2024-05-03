import {TiSocialInstagram} from 'react-icons/ti'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

function Footer () {
    return (
        <footer className="w-full">
            <div className='h-14 m-10 mb-0 p-10 border border-gray-400 bg-transparent  text-white flex items-center justify-between px-8 box-border'>
                <p className='justify-start'> Projetado e desenvolvido por Grupo 4 Dia de Entregar 03/05/24 </p>
                <ul className='flex space-x-4 items-center justify-between'>
                    <a href='' className='text-base text-pink-600'> <TiSocialInstagram /> </a>
                    <a href='' className='text-base text-pink-600'> <SlSocialLinkedin /> </a>
                    <a href='' className='text-base text-pink-600'> <FiGithub /></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer