import React from 'react'
import { SCREENS_TOTAL } from '../utilidades/utilsComum'

export default function Container() {
  const mapAllScreens = () => {
    return SCREENS_TOTAL.map((screen) =>
      screen.component ? (
        <screen.component
          nomeScreen={screen.nome_screen}
          key={screen.nome_screen}
          id={screen.nome_screen}
        />
      ) : (
        <div key={screen.nome_screen}></div>
      )
    )
  }

  return <div>{mapAllScreens()}</div>
}
