import React from 'react'
import Perfil from './Perfil/Perfil'
import Rodape from './Rodape/Rodape'
import Cabecalho from './Cabecalho/Cabecalho'

import './Home.css'

export default function Home(props) {
  return (
    <div className='home-container' id={props.id || ' '}>
      <Cabecalho />
      <Perfil />
      <Rodape />
    </div>
  )
}
