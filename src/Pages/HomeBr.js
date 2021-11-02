import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Components/Navbar';

const MainBR = () => {
  const history = useHistory();
  return (
    <div>
      <Navbar page="home" />
      <div className="home-container" >
        <h4>
          Meu nome é Victor, tenho 19 anos, vivo em São Paulo, sou formado em desenvolvimento Front-end na <a href="https://www.betrybe.com/">Trybe</a>, no momento estou 
          estudando Back-end para me tornar um desenvolvedor Full Stack, e busco emprego na área de desenvolvimento de software.
          <br />
          <br />
          Use os botões ao lado ou a barra de navegação no topo da página para saber mais sobre mim e meus projetos.
        </h4>
        <div className="home-btns-container">
          <button className="home-btn">
            Sobre Mim
          </button>
          <button className="home-btn">
            Projetos
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBR;