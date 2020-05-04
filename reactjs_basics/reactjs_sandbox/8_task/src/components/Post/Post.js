import React from 'react';
import { Link, useParams } from "react-router-dom";
import './Post.css';

const Post = ({title, author, image, content, id}) => {

    return (
        <div className='post-item'>
            <img src={image} height='80px'/>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{content}</p>
            <Link to={`/blog/${id}`} >Read More</Link>
        </div>
    );
}

export default Post;
