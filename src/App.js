import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Context from './Context/Context';
import InitalPage from './Pages/InitalPage';

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitalPage } />
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
