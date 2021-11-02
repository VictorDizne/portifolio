import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Context from './Context/Context';
import InitalPage from './Pages/InitalPage';
import AboutMe from './Pages/AboutMe';
import MainBR from './Pages/HomeBr';
import Projects from './Pages/Projects';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitalPage } />
          <Route exact path="/PT-BR" component={ MainBR }/>
          <Route exact path="/PT-BR/SobreMim" component={ AboutMe }/>
          <Route exact path="/PT-BR/Projetos" component={ Projects }/>
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
