import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./FullPost.css";

import postdata from "../../postdata";

const FullPost = () => {
  const [loadedPost, setloadedPost] = useState();

  let { postId } = useParams();

  useEffect(() => {
    if (!loadedPost) {
      axios
        .get(`http://localhost:3001/posts/${postId}`)
        .then(response => {
          console.log(response.data)
          setloadedPost(response.data)
        })
    }
  })

  let postData = undefined;

  if (postId) {
    postData = <h1>Loading post</h1>
  }
  if (loadedPost) {
    postData = <div className="fullPost">
      <h1>Post {loadedPost.id}</h1>
      <p>{loadedPost.title}</p>
      <p>{loadedPost.author}</p>
      <img src={loadedPost.img} alt={loadedPost.title} />
      <p>{loadedPost.desc}</p>
    </div>
  }

  return postData

};

export default FullPost;
