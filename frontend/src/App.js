import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import NotFound from './pages/notFound'

function App() {
  return (
    <Router>
      <Link route={'/'}>Home</Link> | 
      <Link route={'/about'}> About</Link> |
      <Link route={'/projects'}> Projects</Link>

      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/project'><Projects /></Route>
        <Route path='*'><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
