import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './pages/Counter';
import Basket from './pages/Basket';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route path='/counter'>
          <Counter />
        </Route>
        <Route path='/basket'>
          <Basket />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
