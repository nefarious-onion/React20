import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Home'
import About from './About'
import Blog from './Blog'
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
