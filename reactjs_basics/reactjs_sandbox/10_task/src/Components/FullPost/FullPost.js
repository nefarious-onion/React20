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
        .get(`https://jsonplaceholder.typicode.com/photos/${postId}`)
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
      <img src={loadedPost.thumbnailUrl} alt={loadedPost.title} />
    </div>
  }

  return postData

};

export default FullPost;
