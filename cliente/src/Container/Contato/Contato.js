import React, { useState } from 'react'
//import Typical from 'react-typical'
import axios from 'axios'
import { toast } from 'react-toastify'

import imagem from '../../../src/assets/images/mailz.jpeg'
import loading from '../../../src/assets/images/load2.gif'

import TituloCabecalho from '../../utilidades/TituloCabecalho/TituloCabecalho'
import ServicoScroll from '../../utilidades/ServicoScroll'
import Animacao from '../../utilidades/Animacao'
import Rodape from '../../Container/rodape/Rodape'
import './Contato.css'
//const push = require ('../../netlify/functions/post_contatos')


export default function Contato(props) {
//onst baseUrl="https://myservermail.vercel.app/"
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animacao.animacao.fadeInScreen(props.id)
  }

  const fadeInSubscription =
    ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [banner, setBanner] = useState('')
  const [transf, setTransf] = useState(false)
   const handleName = (e) => {
        setNome(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMensagem = (e) => {
        setMensagem(e.target.value);
    };
    console.log(nome);
    const submitForm = async (e) =>{
        e.preventDefault();
        try {
            let data = {
                nome,
                email,
                mensagem,
            };
            setTransf(true)
            const res = await axios.post(`/contact`, data)
            if(nome.length === 0 || email.length === 0 || mensagem.length === 0){
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setTransf (false)
            }else if(res.status === 200){
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setTransf (false);

                setNome("");
                setEmail("");
                setMensagem("");
            }
        } catch (error) {
            console.log(error)
            
        }
    };

  return (
    <div className='main-container fade-in' id={props.id || ''}>
      <TituloCabecalho subCabecalho={'Manter o Contato'} titulo={'Contato'} />
      <div className='central-form'>
        <div className='col fa-2x'>
          <h4 className='title'>
          {/* <div
            loop = {Infinity}
             steps = {[
              "Pegue meu Contato...", 
             1000,
             "Compartilhe experiências",
             1000,
             
          ]} />*/}
          </h4>
          
          {/*<a href='https://web.facebook.com/?_rdc=1&_rdr'>
            <i className='fa fa-facebook-square' />
          </a>
          <a href='#'>
            <i className='fa fa-google-plus-square' />
          </a>
          <a href='https://www.instagram.com/'>
            <i className='fa fa-instagram' />
        </a>*/}
          <a href='https://github.com/alanpontoinfo/' target='_blank' rel='noreferrer'>
                <i className='fa fa-github' />
              </a>
          <a href='https://wa.me/5571991736397?text=Olá,em que posso ajudar?' target='_blank' rel='noreferrer'>
            <i className='fa fa-whatsapp' />
          </a>
          
          </div>
      
        <div className='back-form'>
          <div className='img-back'>
            <h4> Enviar Seu Email Aqui</h4>
            <img src={imagem} alt='image not fount' />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor='nome'>Nome</label>
            <input type='text'
                        onChange={handleName}
                        value={nome}
                        />
            

            <label htmlFor='email'>Email</label>
            <input type='text'
                        onChange={handleEmail}
                        value={email}
                        />

            <label htmlFor='messagem'>Mensagem</label>
            <textarea type='text'
                        onChange={handleMensagem}
                        value={mensagem}
/>
            <div className='send-btn'>
              <button type='submit'>
                enviar
                <i className='fa fa-paper-plane' />
                {transf ? (
                  <b className='load'>
                    <img src={loading} alt='image not responding' />
                  </b>
                ) : (
                  ''
                )}
              </button>
            </div>
                </form>
        </div>
      </div>
      <Rodape />
    </div>
  )
}
