
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import TinderCards from './components/TinderCards';
import Home from './components/Home';
import FemaleCards from './components/FemaleCards';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/male" component={TinderCards}/>
        <Route path="/female" component={FemaleCards} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
