/* eslint-disable no-restricted-globals */
import React from 'react';
import Navbar from '../Components/Navbar';
import recipesApp from '../Images/recipesApp.png';
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
  }

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
      </div>
    </div>
  );
};

export default Projects;