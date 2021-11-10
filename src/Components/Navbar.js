import React, { useState, useEffect } from 'react';
import Logoff from '../Images/Logoff.png';
import { useHistory } from 'react-router';

//home, aboutMe, projects
const Navbar = ({page}) => {
  const history = useHistory();
  const [availableLinks, setLinks] = useState(['Sobre Mim', 'Projetos', 'Home']);

  useEffect(() => {
    if (page === 'aboutMe') {
      setLinks(['Home', 'Projetos', 'Sobre Mim']);
    }
  
    if (page === 'projects') {
      setLinks(['Home', 'Sobre Mim', 'Projetos']);
    }
  }, []);

  function handleClick(clickedText) {
    switch (clickedText) {
      case 'Sobre Mim':
        history.push('/PT-BR/SobreMim');
        break;
      case 'Projetos':
        history.push('/PT-BR/Projetos');
        break;
      case 'Home':
        history.push('/PT-BR');
        break;
      default:
        break;
    }
  }

  function handleLogOff() {
    localStorage.clear();
    history.push('/');
    window.close();
    console.log('teste')
  }

  return (
    <div className="navbar-container">
      <h2>{availableLinks[2]}</h2>
      <div className="navbar-side-container">
        <h2  onClick={() => handleClick(availableLinks[0])} className="navbar-text">
          {availableLinks[0]}
        </h2>
        <h2 onClick={() => handleClick(availableLinks[1])} className="navbar-text">
          {availableLinks[1]}
        </h2>
        {/* <img
          onClick={ handleLogOff }
          className="LogoffImg"
          src={Logoff}
          alt="Log Off"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;