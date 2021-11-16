import React from 'react';
import Navbar from '../Components/Navbar';
import euTrybe from '../Images/euTrybe.jpg'

const AboutMe = () => {
  return (
    <div>
      <Navbar page="aboutMe" />
      <h1>Sobre Mim:</h1>
      <div className="about-me-container">
        <div>
          <img className="img-about-me" alt="Minha foto" src={ euTrybe }/>
        </div>
        <div className="about-me-text">
        <p>
            Comecei a aprender programação logo cedo, no meu sexto ano do ensino fundamental, pra ser mais exato, onde me juntei a um grupo de colegas e juntos participamos 
            das Olímpiadas de robótica do meu colégio, que consistiam em nós construirmos o hardware e o software de uma maquina que competiria com outras, e foi aí que surgiu 
            minha paixão
          </p>
          <p>
            Por bastante tempo participei das Olímpiadas e consegui até levar algumas medalhas para casa, mas ao chegar no ensino médio eu escolhi parar temporariamente de 
            mexer com programação e robótica.

            Quando eu completei o ensino médio comecei a fazer faculdade de engenharia mecatrônica na FIAP, onde aprendi muito sobre 
            metodologias ágeis e como coordenar um time para trabalhar juntos em um mesmo projeto.

            Ao mesmo tempo descobri que minha paixão não era a robótica, e sim a programação, e foi aí que eu decidi de vez ir atrás de aprender programação, que foi onde eu 
            encontrei a <a href="https://www.betrybe.com/">Trybe</a>, e junto com eles tenho aprendido muito mais sobre o mundo da programação, tendo múltiplos projetos para 
            comprovar e exemplificar o que eu sei fazer. Além disso, aprendi muitos valores de Soft Skills, como comunicação, escuta ativa e até como trabalhar melhor em grupo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;