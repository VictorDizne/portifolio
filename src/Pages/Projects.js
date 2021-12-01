/* eslint-disable no-restricted-globals */
import React from 'react';
import Navbar from '../Components/Navbar';
import recipesApp from '../Images/recipesApp.png';
import starWarsApp from '../Images/starWarsApp.png';
import { useHistory } from 'react-router';

const Projects = () => {
  
  const history = useHistory();

  function handleClick(page) {
    if (page === 'deployRecipes') {
      return window.open('https://sd-013-a-project-recipes-app-delta.vercel.app/', '_blank');
    }
    if (page === 'repRecipes') {
      return window.open('https://github.com/VictorDizne/sd-013-a-project-recipes-app/tree/master/src', '_blank');
    }
    if (page === 'deployStarWars') {
      return window.open('https://sd-013-a-project-starwars-planets-search.vercel.app/', '_blank');
    }
    if (page === 'repStarWars') {
      return window.open('https://github.com/VictorDizne/sd-013-a-project-starwars-planets-search/tree/master/src', '_blank');
    }
  }

  if (screen.width < 1024) {
    //Return que existe apenas para garantir que em telas menores o site funciona como deveria, funcionando como uma especie de midia query
    return (
      <div>
        <Navbar page="projects" />
        <div>
          <div className="project-container">
            <div className="project-container-text">
              <h3>Projeto App de receitas</h3>
              <p>Esse foi o projeto feito em grupo no final do módulo de front-end, que consistia em uma aplicação que buscava receitas de comidas e bebidas de uma api e as mostrava, como um livro de receitas mesmo.
              </p>
              <p>Através do React, Hooks e Context, fizemos essa complexa aplicação em um total de 10 dias de projeto, usando pair programming e metodologias ativas como scrum para separar quem ia fazer o que em certo momento, aumentando a produtividade do grupo.</p>
            </div>
            <div className="buttons-and-img-container">
              <img src={ recipesApp } alt="Foto da aplicação"/>
              <div className="project-container-buttons">
                <button onClick={ () => handleClick('deployRecipes') }>Visite o deploy</button>
                <button onClick={ () => handleClick('repRecipes') }>Confira o repositório</button>
              </div>
            </div>
          </div>

          <div className="project-container">
            
            <div className="project-container-text">
              <h3>Projeto Star Wars Planet Search</h3>
              <p>Esse foi o projeto feito após eu aprender Hooks e Context. Apesar de ser uma aplicação simples, o desafio aqui era manter todas as informações necessarias usando apenas um fetch, assim, após a primeira carregada do site, mesmo se sua conexão cair ele vai continuar 100% funcional.
              </p>
              <p>Usando o Context para gerenciar o estado global e Hooks para atualizar esse Context, essa aplicação filtra de acordo com a escolha do usuário a tabela de planetas que vem de uma API externa, o filtro funciona rapidamente e o site é responsivo graças a existir apenas um fetch</p>
            </div>
            <div className="buttons-and-img-container">
              <img src={ starWarsApp } alt="Foto da aplicação"/>
              <div className="project-container-buttons">
                <button onClick={ () => handleClick('deployStarWars') }>Visite o deploy</button>
                <button onClick={ () => handleClick('repStarWars') }>Confira o repositório</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar page="projects" />
      <div>
        <div className="project-container">
          <img src={ recipesApp } alt="Foto da aplicação"/>
          <div className="project-container-text">
            <h3>Projeto App de receitas</h3>
            <p>Esse foi o projeto feito em grupo no final do módulo de front-end, que consistia em uma aplicação que buscava receitas de comidas e bebidas de uma api e as mostrava, como um livro de receitas mesmo.
            </p>
            <p>Através do React, Hooks e Context, fizemos essa complexa aplicação em um total de 10 dias de projeto, usando pair programming e metodologias ativas como scrum para separar quem ia fazer o que em certo momento, aumentando a produtividade do grupo.</p>
          </div>
          <div className="project-container-buttons">
            <button onClick={ () => handleClick('deployRecipes') }>Visite o deploy</button>
            <button onClick={ () => handleClick('repRecipes') }>Confira o repositório</button>
          </div>
        </div>

        <div className="project-container">
          <img src={ starWarsApp } alt="Foto da aplicação"/>
          <div className="project-container-text">
            <h3>Projeto Star Wars Planet Search</h3>
            <p>Esse foi o projeto feito após eu aprender Hooks e Context. Apesar de ser uma aplicação simples, o desafio aqui era manter todas as informações necessarias usando apenas um fetch, assim, após a primeira carregada do site, mesmo se sua conexão cair ele vai continuar 100% funcional.
            </p>
            <p>Usando o Context para gerenciar o estado global e Hooks para atualizar esse Context, essa aplicação filtra de acordo com a escolha do usuário a tabela de planetas que vem de uma API externa, o filtro funciona rapidamente e o site é responsivo graças a existir apenas um fetch</p>
          </div>
          <div className="project-container-buttons">
            <button onClick={ () => handleClick('deployStarWars') }>Visite o deploy</button>
            <button onClick={ () => handleClick('repStarWars') }>Confira o repositório</button>
          </div>
        </div>
      </div>
    </div>
  );
};

  

export default Projects;