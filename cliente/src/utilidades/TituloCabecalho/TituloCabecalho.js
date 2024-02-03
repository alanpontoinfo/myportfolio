import React from 'react'

import './TituloCabecalho.css'

export default function TituloCabecalho(props) {
  return (
    <div className='heading-container'>
      <div className='screen-heading'>
        <span>{props.titulo}</span>
      </div>
      {props.subCabecalho ? (
        <div className='screen-sub-heading'>
          <span>{props.subCabecalho}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className='heading-seperator'>
        <div className='seperator-line'></div>
        <div className='seperator-blob'>
          <div></div>
        </div>
      </div>
    </div>
  )
}
