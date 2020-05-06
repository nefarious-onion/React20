import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import './Blog.css';
import postData from '../../data/postData.json';
import Postlist from '../Postlist/Postlist';
import Post from '../Post/Post';

//const posts = postData;
const Blog = () => {
    const posts = postData;



    //use switch between postlist and single post (use parameters)

    return (
        <Router>
            <div className='blog-container'>
                <Switch>
                    <Route path='/blog' exact>
                        <Postlist posts={posts} />
                    </Route>
                    <Route path='/blog/:postId'>
                        <Post posts={posts}/>
                    </Route>

                </Switch>
            </div>
        </Router>

    );
}

export default Blog;
