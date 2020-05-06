import React from "react";

import "./PostCard.css";
import { Link } from "react-router-dom";

const PostCard = ({ title, img, desc, link }) => {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{desc}</p>
      <img src={img} alt={title} />
      <Link to={link}>Read more</Link>
    </div>
  );
};

export default PostCard;
