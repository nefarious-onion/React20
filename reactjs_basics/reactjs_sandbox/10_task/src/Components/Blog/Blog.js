import React, { useState, useEffect } from "react";
import axios from 'axios';
import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import FullPost from "../FullPost/FullPost";

const Blog = () => {

  const [posts, setPosts] = useState([]);
  let match = useRouteMatch();

    useEffect(() => {
      axios.get('http://localhost:3001/posts')
      .then(response => {
        const posts = response.data.slice(0, 10);
        setPosts(posts);
        console.log(posts);
      })
    }, []);

  const PostList = posts.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        link={`${match.url}/${p.id}`}
      />
    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div>
            <h1>Blog</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
