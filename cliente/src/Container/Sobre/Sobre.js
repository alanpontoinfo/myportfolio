//import React, { useEffect } from 'react'
import TituloCabecalho from '../../utilidades/TituloCabecalho/TituloCabecalho'
import ServicoScroll from '../../utilidades/ServicoScroll'
import Animacao from '../../utilidades/Animacao'

import './Sobre.css'

export default function sobre(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return Animacao.animacao.fadeInScreen(props.id)
  }

 //const fadeInSubscription = ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)
 ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)

  const CONSTANTES_SCREEN = {
    descricao:  'Eu sou um profissional, Graduado Bacharel em Sistemas de Informações com certificação em Desenvolvedor Web e Análise de Dados.'  ,
       

    destaques: {
      principal: [
        "Construção de sites responsivos e landpages",
        'Construção de API-Rest ',
        "Desenvolvimento de Banco de Dados ",
        "Conhecimento em Modelagem de Dados , tabelas realcionais, UML", 
        "Análise e visualização de Dados ",
        "Automatização CI/CD -Integração e Entrega Contínua-"
      
          
      ],
      cabecalho: 'Aqui tem os principais destaques:',
    },
  }

  const renderHighLight = () => {
    return CONSTANTES_SCREEN.destaques.principal.map((valor, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{valor}</span>
      </div>
    ))
  }

  return (
    <div
      className='sobre-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='sobre-parent'>
        <TituloCabecalho
          titulo={'Sobre'}
          subCabecalho={'Por quê Escolher-me?'}
        />
        <div className='sobre-card'>
          <div className='sobre-profile'></div>
          <div className='sobre-details'>
            <span className='sobre-description'>
              {CONSTANTES_SCREEN.descricao}
            </span>
            <div className='sobre-highlights'>
              <div className='highlight-heading'>
                <span>{CONSTANTES_SCREEN.destaques.cabecalho}</span>
              </div>
              {renderHighLight()}
            </div>
            <div className='sobre-options'>
              <button
                className='btn primary-btn'
                onClick={() => ServicoScroll.scrollHandler.scrollParaContato()}
              >
                {''}
                Entre em contato{''}
              </button>
              <a href='alansantos.pdf' download={'Alan Santos.pdf'}>
                <button className='btn highlighted-btn'>
                  Baixe portifolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
