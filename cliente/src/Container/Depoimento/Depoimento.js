import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import TituloCabecalho from '../../utilidades/TituloCabecalho/TituloCabecalho'
import ServicoScroll from '../../utilidades/ServicoScroll'
import Animacao from '../../utilidades/Animacao'
import './Depoimento.css'

import Dany from '../../../src/assets/Testimonial/perfilsaborearte.jpg'
import Anderson from '../../../src/assets/Testimonial/perfilasj.jpg'
import Augusto from '../../../src/assets/Testimonial/perfildonana.jpg'
import Alex from '../../../src/assets/Testimonial/perfilarquit.jpg'

import shape from '../../../src/assets/Testimonial/shape-bg.png'

export default function Depoimento(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animacao.animacao.fadeInScreen(props.id)
  }

  const fadeInSubscription =
    ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)

  const opcoes = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  }
  return (
    <div>
      <TituloCabecalho
        titulo={'Depoimentos'}
        subCabecalho={'O que meus Clientes estão dizendo...'}
      />
      <section className='depoimento-section fade-in' id={props.id || ''}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel
              className='owl-carousel'
              id='depoimento-carousel'
              {...opcoes}
            >
              <div className='col-lg-12'>
                <div className='depo-item'>
                  <div className='depo-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Eu gostei muito de trabalhar com Alan, ele sempre se faz
                      presente e entregou o projeto no prazo.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={Dany} alt='sem conexao com a internet'></img>
                    <h5> Dany Santos</h5>
                    <p>Empreendedora do Sabor&Arte</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='depo-item'>
                  <div className='depo-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Eu recomendo o trabalho dele justamente por que fez o site
                      como imaginei.
                      <i className='fa fa-quote-right' />
                    </p>

                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={Anderson} alt='sem conexao com a internet'></img>
                    <h5>Anderson</h5>
                    <p>Diretor Aj2Contabil</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='depo-item'>
                  <div className='depo-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Quando ele entregou meu trabalho fiquei muito feliz, pois
                      ele implementou todas funcionalidades requisitadas. Grato!
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={Augusto} alt='sem conexao com a internet'></img>
                    <h5>Augusto Junior</h5>
                    <p> Empresário </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='depo-item'>
                  <div className='depo-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      Eu honestamente fiquei muito satisfeito com seu trabalho .
                      E um tipo de profissional que indico a todos.
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={Alex} alt='no internet connection'></img>
                    <h5>Alex </h5>
                    <p>Arquiteto</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className='footer-image'>
        <img src={shape} alt='foto não corresponde' />
      </div>
    </div>
  )
}
