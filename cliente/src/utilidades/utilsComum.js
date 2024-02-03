import Home from '../Container/Home/Home'
import Sobre from '../Container/Sobre/Sobre'

import Depoimento from '../Container/Depoimento/Depoimento'
import Contato from '../Container/Contato/Contato'
import Experiencia from '../Container/Experiencia/Experiencia'

export const SCREENS_TOTAL = [
  {
    nome_screen: 'Home',
    component: Home,
  },
  {
    nome_screen: 'Sobre',
    component: Sobre,
  },

  {
    nome_screen: 'Experiencia',
    component: Experiencia,
  },

  {
    nome_screen: 'Depoimento',
    component: Depoimento,
  },

  {
    nome_screen: 'Contato',
    component: Contato,
  },
]

export const GET_INDEX_SCREEN = (nome_screen) => {
  if (!nome_screen) return 1

  for (let i = 0; i < SCREENS_TOTAL.length; i++) {
    if (SCREENS_TOTAL[i].nome_screen === nome_screen) return i
  }

  return -1
}
