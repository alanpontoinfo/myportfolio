import React from 'react'
//import Typical from 'react-typical'
import ServicoScroll from '../../../utilidades/ServicoScroll'
import './Perfil.css'

export default function Perfil() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon fa-2x '>
             {/*  <a href='#'>
                <i className='fa fa-facebook-square' />
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square' />
              </a>
              <a href='#'>
                <i className='fa fa-instagram' />
              </a>*/}
           
              <a href='https://github.com/alanpontoinfo/' target='_blank' rel='noreferrer'>
                <i className='fa fa-github' />
              </a>
              <a href='https://wa.me/5571991736397?text=Olá,em que posso ajudar?' target='_blank' rel='noreferrer'>
            <i className='fa fa-whatsapp' />
          </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {''}
              Olá, Eu sou <span className='highlighted-text'> Alan </span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              {/*<h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Desenvolvedor Web 🕸 ',
                    1000,
                    'Full Stack ♻ '  ,
                    1000
                  
                  ]}
                />
                </h1>*/}
            </span>
            <span className='profile-role-tagline'>
              Aplicações web modernas.
            </span>
          </div>

          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ServicoScroll.scrollHandler.scrollParaContato()}
            >
              {''}
              Entre em contato{''}
            </button>
            <a href='portfolio_projetos.pdf' download={'portfolio_alan.pdf'}>
              <button className='btn highlighted-btn'>Baixe portfolio</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}
