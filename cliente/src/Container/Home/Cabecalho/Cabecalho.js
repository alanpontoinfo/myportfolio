import React, { useState, useEffect } from 'react'
import { SCREENS_TOTAL, GET_INDEX_SCREEN } from '../../../utilidades/utilsComum'
import ServicoScroll from '../../../utilidades/ServicoScroll'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cabecalho.css'

export default function Cabecalho() {
  const [selectedScreen, setSelectedScreen] = useState(0)
  const [mostrarOpcoesCabecalho, setMostrarOpcoesCabecalho] = useState(false)

  const atualizaScreenAtual = (screenAtual) => {
    if (!screenAtual || !screenAtual.screenInView) return

    let screenIndex = GET_INDEX_SCREEN(screenAtual.screenInView)
    if (screenIndex < 0) return
  }
  let screenAtualInscricao =
    ServicoScroll.atualScreenBroadcaster.subscribe(atualizaScreenAtual)

  const getCabecalhoOpcoesClasses = (index) => {
    let classes = 'header-option'
    if (index < SCREENS_TOTAL.length - 1)
      classes += ' header-option header-option-seperator '
    if (selectedScreen === index)
      classes += 'header-option selected-header-option'
    return classes
  }

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.nome_screen)
    if (!screenComponent) return

    screenComponent.scrollIntoView({ behavior: 'smooth' })
    setSelectedScreen(index)
    setMostrarOpcoesCabecalho(false)
  }

  const getCabecalhoOpcoes = () => {
    return SCREENS_TOTAL.map((Screen, i) => (
      <div
        key={Screen.nome_screen}
        className={getCabecalhoOpcoesClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{Screen.nome_screen}</span>
      </div>
    ))
  }

  useEffect(() => {
    return () => {
      screenAtualInscricao.unsubscribe()
    }
  }, [screenAtualInscricao])

  return (
    <div
      className='header-container'
      onClick={() => setMostrarOpcoesCabecalho(!mostrarOpcoesCabecalho)}
    >
      <div className='header-parent'>
        <div
          className='header-hamburger'
          onClick={() => setMostrarOpcoesCabecalho(!mostrarOpcoesCabecalho)}
        >
          <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
        </div>
        <div className='header-logo'>
          <span>ALAN SANTOS</span>
        </div>
        <div
          className={
            mostrarOpcoesCabecalho
              ? 'header-options show-hamburger-options'
              : 'header-options'
          }
        >
          {getCabecalhoOpcoes()}
        </div>
      </div>
    </div>
  )
}
