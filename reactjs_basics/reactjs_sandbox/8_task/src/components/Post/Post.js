import React from 'react';
import { Link, useParams } from "react-router-dom";
import './Post.css';

const Post = ({ posts }) => {
    let { postId } = useParams();
    console.log(postId);
    console.log(posts[postId - 1].id);
    let post = posts.find(({ id }) => id === Number(postId));
    console.log(post)

    return (
        <div className='post-container'>
            <div className='post-img'>
                <img src={post.image} height='300px' />
            </div>
            <div className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.author}</p>
                <p>{post.content}</p>
                <Link to='/blog' >Go back to blog</Link>
            </div>
        </div>
    );
}

export default Post;
