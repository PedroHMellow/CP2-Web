import { useState } from 'react'
import './../../App.css'


function App() {
  const [form_nome, setFormNome] = useState("");
  const [form_email, setFormEmail] = useState("");
  const [form_msg, setFormMsg] = useState("");


  const printar = (nome, email, msg) =>{
    const frase_nome = `Nome: ${nome}`;
    const frase_email = `Email: ${email}`;
    const frase_msg = `Mensagem: ${msg}`;
    const frases = [frase_nome, frase_email, frase_msg];

    console.log("");
    for(let i = 0; i<frases.length; i++){
      console.log(frases[i]);
    }
    return
  };


  const alertar = () =>{
    const frase = "Todos os campos devem ser preenchidos para a mensagem ser enviada!";
    alert(frase);
    return
  };


  const enviar_msg = () =>{
    (form_nome && form_email && form_msg) ? printar(form_nome, form_email, form_msg):alertar();
    return
  };


  return (
    <>
      <section className="text-gray-400 flex flex-col items-start gap-10 pr-10 pl-10">
        <div className='text-6xl ml-14 font-semibold mt-20'>Contato</div>
        <div className='bg-magenta h-1 w-24 ml-14 mb-8'></div>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col text-2xl gap-8 font-semibold'>
            <div className='mt-3 mb-4'>
              Fale conosco
              </div>

            <div className='flex flex-col items-start'>
              <div>
                Email
                </div>
              <div className='font-extralight text-xl'>
                grupo4@gmail.com
                </div>
            </div>

            <div className='flex flex-col items-start'>
              <div>
                Telefone
                </div>
              <div className='font-extralight text-xl'>
                (55)4444 4444
                </div>
            </div>
          </div>
        
          <form className='flex flex-wrap w-2/3'>
            <div className='flex flex-col w-5/12'>
              <label htmlFor="form_nome" className='text-start'>Nome</label>
              <input type="text" onChange={(e) => setFormNome(e.target.value)}  id='form_nome' className='bg-gray-800 border transition duration-300 hover:border-magenta rounded focus:outline-none p-2'/>
            </div>

            <div className='w-2/12'></div>

            <div className='flex flex-col w-5/12'>
              <label htmlFor="form_email" className='text-start'>Email</label>
              <input type="text" onChange={(e) => setFormEmail(e.target.value)} id='form_email' className='bg-gray-800 border transition duration-300 hover:border-magenta rounded focus:outline-none p-2'/>
            </div>

            <div className='flex flex-col w-full mt-6 mb-6'>
              <label htmlFor="form_msg" className='text-start'>Mensagem</label>
              <textarea onChange={(e) => setFormMsg(e.target.value)} id='form_msg' className='bg-gray-800 border transition duration-300 hover:border-magenta rounded focus:outline-none p-2 h-32 resize-none'/>
            </div>

            <button type='button' id="form_bt" className='text-magenta border border-magenta pt-3 pb-3 pr-11 pl-11 font-bold transition duration-300 hover:bg-magenta hover:text-black' onClick={enviar_msg}>ENVIAR</button>

          </form>
        </div>
      </section>
    </>
  )
}


export default App
