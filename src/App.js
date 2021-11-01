import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Context from './Context/Context';
import InitalPage from './Pages/InitalPage';
import MainBR from './Pages/MainBR';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitalPage } />
          <Route exact path="/PT-BR" component={ MainBR }/>
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
