import React from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";

import postdata from "../../postdata";

const FullPost = () => {
  let { postId } = useParams();
  let post = postdata.find((p) => p.id == postId);

  return (
    <div className="fullPost">
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
      <img src={post.img} alt={post.title} />
    </div>
  );
};

export default FullPost;
