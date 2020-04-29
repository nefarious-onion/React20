import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


const Home = () => {
    return (
        <h1>This is the home page</h1>
    );
}

const About = () => {
    return (
        <h1>This is the About page</h1>
    )
}

const Contact = () => {
    return (
        <h1>This is the Contact Page</h1>
    )
}

const SimpleRouting = () => {
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}

export default SimpleRouting;
