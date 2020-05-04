import React from 'react';
import Post from '../Post/Post';
import './Postlist.css'

const Postlist = ({posts}) => {

    const postList = posts
        .map(({ id, title, image, author, content }) =>
            <Post
                key={id}
                id={id}
                title={title}
                image={image}
                author={author}
                content={content.substring(0, 50) + '...'}
            />);
    return (
        <div className='postlist-container'>
            {postList}
        </div>
    );
}

export default Postlist;
