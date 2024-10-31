 import React, { useState, useEffect } from 'react'
import TituloCabecalho from '../../utilidades/TituloCabecalho/TituloCabecalho'

import ServicoScroll from '../../utilidades/ServicoScroll'

import Animacao from '../../utilidades/Animacao'

//import experiencia from '../../assets/Resume'

import './Experiencia.css'

//import imagem from '../../assets/Resume/'

const Experiencia = (props) => {
  /*states*/
  const [IndexPrincipalSelecionado, setIndexPrincipalSelecionado] = useState(0)
  const [carroselOfStyle, setCarrosselOfStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animacao.animacao.fadeInScreen(props.id)
  }

  const fadeInSubscription =
    ServicoScroll.atualScreenFadeIn.subscribe(fadeInScreenHandler)

  /** Reusar Componentes menores */

  const CabecalhoExperiencia = (props) => {
    return(
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.cabecalho ? props.cabecalho : ''}</span>
         <div>{props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div> </div>
          )}</div>
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subCabecalho ? props.
          subCabecalho : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.descricao ? props.descricao : ''}</span>
        </div>
      </div>
    )
  }
  /** Dados Staticos para rotulos */

  const principalExperiencia = [
    { label: 'Educação', logoSrc: 'education.svg' },
    { label: 'Histórico recente', logoSrc: 'work-history.svg' },
    { label: 'Habilidades', logoSrc: 'programming-skills.svg' },
    { label: 'Projetos atuais', logoSrc: 'projects.svg' },
   /*  { label: 'Interesses', logoSrc: 'interests.svg' },*/
  ]

  // habilidades
  const DetalhesHabilidades = [
    { habilidade: 'Javascript', ratingPercentage: 75 },
    { habilidade: 'React JS', ratingPercentage: 75 },
    { habilidade: 'Node JS', ratingPercentage: 70 },
    { habilidade: 'Express JS', ratingPercentage: 85 },
    { habilidade: 'HTML', ratingPercentage: 85 },
    { habilidade: 'CSS', ratingPercentage: 85 },
    { habilidade: 'MongoDB', ratingPercentage: 60 },
    { habilidade: 'MySQl', ratingPercentage: 65 },
    { habilidade: 'Python', ratingPercentage: 65 },
  ]

  const detalhesProjeto = [
  /*  {
      titulo: ' Portifolio Pessoal',
      duracao: { fromDate: '2020', toDate: '2021' },
      descricao:
        'Um WebSite Pessoal que mostra alguns dos meu projetos e detalhes das tecnologias utilizadas ',
      subCabecalho: 'Tecnoloiga usada: React Js, Bootstrap, javascript, css, html, NodeJs e Express Js', 
    },*/
    {
      titulo: <a href="https://alanpontoinfo.github.io/javalearn/contabilidade/aj2contabil.html" target="_blank" rel="noopener noreferrer"> <img src={require("../../assets/Resume/cont-log.jpg").default} alt="aj2conatbil" style={{width:'100px', hight:'100px'}}/>  </a>,
      duracao: { fromDate: '2023', toDate: '2024' },
      descricao: 'Website para divulgar os serviços de Contabilidade',
      subCabecalho: 'Tecnologia Usada: Html, Javascript, Css',
      
    },
    {
      titulo: <a href="https://saborearte.netlify.app" target="_blank" rel="noopener noreferrer"> <img src={require("../../assets/Resume/logo-saborearte.jpg").default} alt="saborearte" style={{width:'100px', hight:'100px'}}/> </a>,
      duracao: { fromDate: '2023', toDate: '2024' },
      descricao:
        'Este site divulga os produtos com a devida descrição e tem integração com as redes sociais e whatsapp',
      subCabecalho:
        'Tecnologia Usada: Javascript, css, React Js, Bootstrap, html',
    },
    {
      titulo: <a href="https://public.tableau.com/app/profile/alan.santos2743/viz/covid19_17221684763460/DashboardCovid19" target="_blank" rel="noopener noreferrer"> <img src={require("../../assets/Resume/covid19.jpeg").default} alt="covid19" style={{width:'100px', hight:'100px'}}/> </a>,
      duracao: { fromDate: '2023', toDate: '2024' },
      descricao:
        'Este é um projeto de Análise de Dados. Um Dashboard(painel) com gráficos e mapas sobre o Covid19. ',
      subCabecalho:
        'Tecnologia Usada: Python, Excel, Tableau',
    },
    
  ]

 const detalhesExperiencia = [
    <div className='resume-screen-container' key='educacao'>
      <CabecalhoExperiencia
        cabecalho={'Centro Universitário da Bahia'}
        subCabecalho={'BACHAREL EM SISTEMAS DE INFORMAÇÃO'}
        fromDate={'2005'}
        toDate={'2011'}
      />
      <CabecalhoExperiencia
        cabecalho={'FreeCodeCamp'}
        subCabecalho={<a href='https://www.freecodecamp.org/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1'
        target="_blank" rel="noopener noreferrer"> Ver minhas CERTIFICAÇÕES 
        </a>}
        fromDate={'2020'}
        toDate={'2022'}
      />
      
     {/*<CabecalhoExperiencia
        cabecalho={'JavaScript Algorithms and Data Structures'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://www.freecodecamp.org/certification/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1/javascript-algorithms-and-data-structures'
      target="_blank" rel="noopener noreferrer">
        Verificar Certificação e projetos
      </a>
       <CabecalhoExperiencia
        cabecalho={'Front End Development Libraries React Js'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://www.freecodecamp.org/certification/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1/front-end-development-libraries'
      target="_blank" rel="noopener noreferrer">
        Verificar Certificação e projetos
      </a>

      <CabecalhoExperiencia
        cabecalho={'Back End Development and APIs'}
        fromDate={'2021'}
        toDate={'2021'}
      />
      <a href='https://www.freecodecamp.org/certification/fcc9e9a63cb-d21d-4d89-ad1a-40f98d9f86c1/back-end-development-and-apis'
      target="_blank" rel="noopener noreferrer">
        Verificar Certificação e projetos
  </a>*/}
      <CabecalhoExperiencia
        cabecalho={'MongoDB University'}
        subCabecalho={   <a href='https://university.mongodb.com/course_completion/ec6d446e-a80b-498f-bd33-6cf5a07c94c0'
        target="_blank" rel="noopener noreferrer">
        Ver Certificação MongoDb for Sql Pros
        </a>}
        fromDate={'2021'}
        toDate={'2021'}
      />
     
    </div>,

    /* Experiência de Trabalho */
    <div className='resume-screen-container' key='experiencia-trabalho'>
      <div className='experience-container'>
        <CabecalhoExperiencia
          cabecalho={'Max Projetos'}
          subTitulo={'Desenvolvedor Web'}
          fromDate={'2020'}
          toDate={'2021'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            <p>Analista/ Desenvolvedor:</p>
<p>Trabalhei no desenvolvimento de um  modulo que permitia fazer consulta dos créditos dos clientes via requisição 'GET' na API para exibir os dados em formato de  relatorios..</p>
 
<ul>
  <li>
Ferramentas utilizadas:</li>
 <li>Gitbash para comitar e atualizar os arquivos no repositorio.</li>
<li>  Trello para  gerenciar as tarefas.</li>
 <li> Editor do mysql para fazer consultas e subconsultas no banco de dados.</li>
 <li>Postman para testar api,s.</li>
 <li> Vscode para editar os códigos.</li>
 </ul>

          </span>
         
        </div>,
        <CabecalhoExperiencia
          cabecalho={'Free Lance'}
          subTitulo={'Desenvolvedor Web'}
          fromDate={'2021'}
          toDate={'Atual'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            <p>Trabalho com Desenvolvimento de Websites, landPages responsivos , Análises e Visualização de Dados.</p>
          </span>
        </div>
      </div>
    </div>,
    /*Habilidades*/
    <div
      className='resume-screen-container programming-skills-container'
      key='habilidades'
    >
      {DetalhesHabilidades.map((habilidade, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{habilidade.habilidade}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: habilidade.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /*PROjetos */
    <div className='resume-screen-container' key='projetos'>
      {detalhesProjeto.map((detalhesProjeto, index) => (
        <CabecalhoExperiencia
          key={index}
          cabecalho={detalhesProjeto.titulo}
          subCabecalho={detalhesProjeto.subCabecalho}
          descricao={detalhesProjeto.descricao}
          fromDate={detalhesProjeto.duracao.fromDate}
          toDate={detalhesProjeto.duracao.toDate}
        />
       ))}
      
       </div>,

    /* Interesses 

    <div className='resume-screen-container' key='interesses'>
     
      <CabecalhoExperiencia
        cabecalho='Inteligencia Artificial'
        descricao='Nesta area tenho me interessado na utilização do MachineLearn para fazer previsões por meio de volume de dados em formato csv e xls'
      />
      <CabecalhoExperiencia
        cabecalho='Esporte ao ar livre'
        descricao ='Meu interesse é mais em praticar corridas e natação.'
      />
    </div>,*/
  ]

  const manipulaCarrossel = (index) => {
    let deslocaAltura = 480
    let deslocaNovoCarrossel = {
      style: { transform: 'translateY(' + index * deslocaAltura * -1 + 'px' },
    }

    setCarrosselOfStyle(deslocaNovoCarrossel)
    setIndexPrincipalSelecionado(index)
  }

  const getPrincipal = () => {
    return principalExperiencia.map((principal, index) => (
      <div
        onClick={() => manipulaCarrossel(index)}
        className={
          index === setIndexPrincipalSelecionado
            ? 'bullet selected-bullet'
            : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${principal.logoSrc}`).default}
          alt='B'
        />
        <span className='bullet-label'>{principal.label}</span>
      </div>
    ))
  }

  const getExperienciaScreens = () => {
    return (
      <div style={carroselOfStyle.style} className='resume-details-carousal'>
        {detalhesExperiencia.map((DetalheExperiencia) => DetalheExperiencia)}
      </div>
    )
  }

  useEffect(() => {
    return () => {
      /* Cancelara as incriçoes */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])
  return (
    <div
      className='resume-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='resume-content'>
        <TituloCabecalho
          titulo={'Experiência'}
          subCabecalho={'Detalhes da minha experiencia'}
        />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getPrincipal()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getExperienciaScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Experiencia
