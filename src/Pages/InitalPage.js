/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory } from 'react-router';
import BrlFlag from '../Images/BrlFlag.png'
import UsaFlag from '../Images/UsaFlag.png'
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const InitalPage = () => {
  const history = useHistory();
  const autoRedirect = true;
  function handleClick(language) {
    localStorage.setItem('preferredLanguage', language);
    if (language === 'brl') {
      history.push('/PT-BR');
    }
    else history.push('/EN-US')
  }

  useEffect(() => {
    const language = localStorage.getItem('preferredLanguage');
    
    if (language) {
      if (language === 'brl') {
        history.push('/PT-BR')
      }
      else history.push('/EN-US');
    }
  }, []);

  if (autoRedirect) {
    return <Redirect to="/PT-BR"/>
  }

  return (
    <div>
      <div>
        <h1>Welcome to my Portfolio</h1>
        <p>Please chose your preferred language for a better navigation</p>
        <h1>Bem vindo ao meu Portfólio</h1>
        <p>Por favor escolha sua linguagem preferida para uma melhor navegação</p>
      </div>
      <br />
      <div className="languages-img-container">
        <img
          className="flag"
          src={BrlFlag}
          onClick={ () => handleClick('brl') }
          alt="Clique aqui para acessar o site em português brasileiro"
        />
        <img
          className="flag"
          onClick={ () => handleClick('usa') }
          src={UsaFlag}
          alt="Click here to acess the site in american english"
        />
      </div>
    </div>
  );
};

export default InitalPage;