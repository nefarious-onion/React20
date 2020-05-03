import React from 'react';
import './Post.css';

const Post = ({title, author, image, content}) => {
    console.log(image);
    return (
        <div className='post-item'>
            <img src={image} height='80px'/>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{content}</p>
            <button>Read More</button>
        </div>
    );
}

export default Post;
