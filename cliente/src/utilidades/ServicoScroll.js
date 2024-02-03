import { SCREENS_TOTAL } from './utilsComum'
import { Subject } from 'rxjs'

export default class ServicoScroll {
  /* INSTANCIA CLASS SINGLETON*/
  static scrollHandler = new ServicoScroll()

  /* Instanciar os Broadcaster*/

  static atualScreenBroadcaster = new Subject()
  static atualScreenFadeIn = new Subject()

  // vamos ter um construtor aqui e adcionar evento scroll para windows

  constructor() {
    /* Add scroll event para window*/
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
  }
  scrollParaContato = () => {
    let contatoScreen = document.getElementById('Contato')
    if (!contatoScreen) return

    contatoScreen.scrollIntoView({ behavior: 'smooth' })
  }

  scrollParaHome = () => {
    let homeScreen = document.getElementById('Home')
    if (!homeScreen) return

    homeScreen.scrollIntoView({ behavior: 'smooth' })
  }

  /* Check se elemento está no view .this simplesmente significa se o documento aparece completo na tela ou não*/
  isElementInview = (elem, type) => {
    let rec = elem.getBoundingClientRect()
    // este método retorna um DomRect object fornecendo informacao sobre o tamanho de um elemento e esta posicao relativa para o viewport.
    // o viewport refere par aa parte do documento que voce esta vizualizando que esta atualmente visivel nesta janela

    let elementTop = rec.top
    let elemBottom = rec.bottom

    /*quando o elemeto está parcialmente visivel */
    let parcialmenteVisivel = elementTop < window.innerHeight && elemBottom >= 0

    /* Completamente Visivel */

    let completamenteVisivel =
      elementTop >= 0 && elemBottom <= window.innerHeight

    switch (type) {
      case 'parcial':
        return parcialmenteVisivel
      case 'completo':
        return completamenteVisivel

      default:
        return false
    }
  }

  /* chec a tela que está atualemte sob viewport */
  // significa que a tela está mostrada cheia
  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return

    for (let screen of SCREENS_TOTAL) {
      let screenFromDOM = document.getElementById(screen.nome_screen)
      if (!screenFromDOM) continue

      let totalmenteVisivel = this.isElementInview(screenFromDOM, 'completo')
      let parcialmenteVisivel = this.isElementInview(screenFromDOM, 'parcial')

      if (totalmenteVisivel || parcialmenteVisivel) {
        if (parcialmenteVisivel && !screen.alreadyRendered) {
          //Broadcast fade in effect
          ServicoScroll.atualScreenFadeIn.next({
            fadeInScreen: screen.nome_screen,
          })

          screen['alreadyRendered'] = true
          break
        }

        if (totalmenteVisivel) {
          //Broadcast screen nome
          ServicoScroll.atualScreenBroadcaster.next({
            screenInView: screen.nome_screen,
          })
          break
        }
      }
    }
  }
}
