import React from 'react';
import Post from './Post';
import './Blog.css';
import postData from '../data/postData.json';

//const posts = postData;
class Blog extends React.Component {
    state = {
        posts: [...postData]
    }

    //use switch between postlist and single post (use parameters)
    render() {
        console.log(this.state.posts)

        const posts = [...this.state.posts]
            .map( ({id, title, image, author, content}) => 
            <Post 
                key={id}
                title={title}
                image={image}
                author={author}
                content={content. substring(0, 50) + '...'}
            />);
    return (
        <div className='blog-container'>
            {posts}
        </div>
    );
    }
}

export default Blog;
