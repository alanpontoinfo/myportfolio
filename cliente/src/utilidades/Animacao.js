export default class Animacao {
  /** Instancia Classe Singleton */
  static animacao = new Animacao()

  fadeInScreen = (nome_screen) => {
    let screen = document.getElementById(nome_screen)
    if (!nome_screen || !screen) return

    screen.style.opacity = '5'
    screen.style.transform = 'translateY(1px)'
  }
}
