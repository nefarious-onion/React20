import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import './App.css';

const App = () => {
  return (
    <Router>
      <div >
       
        <ul className='navbar'>
          <li>
          <Link to='/'>Anne Kokkonen</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About me</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
