import React from 'react';
import { useHistory } from 'react-router';

const MainBR = () => {
  const history = useHistory();
  return (
    <div>
      <div>
        <p>
          Meu nome é Victor, tenho 19 anos, vivo em São Paulo, sou formado em desenvolvimento Front-end na <a href="https://www.betrybe.com/">Trybe</a>, no momento estou 
          estudando Back-end para me tornar um desenvolvedor Full Stack, e busco emprego na área de desenvolvimento de software.
        </p>
        <button>
          Sobre Mim
        </button>
        <button>
          Projetos
        </button>
      </div>
    </div>
  );
};

export default MainBR;