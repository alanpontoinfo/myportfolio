import React from 'react'
import './Rodape.css'
import imagem from '../../../assets/Home/shape-bg.jpg'

export default function rodape() {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={imagem} alt='imagem fora' />
      </div>
    </div>
  )
}
