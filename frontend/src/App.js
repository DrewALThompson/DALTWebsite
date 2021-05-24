import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './css/App.css';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import NotFound from './pages/notFound'

function App() {
  return (
    <Router>
      <div className='routerBox'>
        <Link to='/' className='routerBox-link'>Home</Link> 
        <Link to='/about' className='routerBox-link'> About</Link>
        <Link to='/projects' className='routerBox-link'> Projects</Link>
      </div>

      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/projects'><Projects /></Route>
        <Route path='*'><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
