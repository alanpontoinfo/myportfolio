import React from 'react'
import './Rodape.css'
import ServicoScroll from '../../utilidades/ServicoScroll'

export default function Rodape() {
  return (
    <div className='scroll-container'>
      <button
        className='btn-scroll'
        onClick={() => ServicoScroll.scrollHandler.scrollParaHome()}
      >
        <i className='fa fa-arrow-up'></i>
      </button>
    </div>
  )
}
