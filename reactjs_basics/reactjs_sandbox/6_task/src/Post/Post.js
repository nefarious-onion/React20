import React from 'react';
import './Post.css'

const Post = ({ image, title, author, content, onClick }) => {
    return (
        <div className="post" onClick={onClick}>
            <img className="post__image" src={image} alt={title} width="100%"></img>
            <h3 className='post__title'>{title}</h3>
            <p className="post__author">{author}</p>
            <p className="post__content">{content}</p>
        </div>
    );
}

export default Post;
