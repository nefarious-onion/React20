import React from 'react';
import { Link, useParams } from "react-router-dom";
import './Postlist.css'


const Postlist = ({ posts }) => {

    const postList = posts
        .map(({ id, title, image, author, content }) =>
            <div className='postlist-item'>
                <img src={image} height='80px' />
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{content.substring(0, 50) + '...'}</p>
                <Link to={`/blog/${id}`} >Read More</Link>
            </div>)

    return (
        <div className='postlist-container'>
            {postList}
        </div>
    );
}

export default Postlist;
