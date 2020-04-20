import React, { Component } from 'react';
import Post from './Post/Post';
import faker from 'faker';
import './App.css';

let randomImage = faker.image.animals();
let randomTitle = faker.lorem.sentence()
let randomName = faker.name.findName();
let randomContent = faker.lorem.paragraph();

const news = [
  {
    image: "https://images.unsplash.com/photo-1586521995659-4204fe01d104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    title: randomTitle,
    author: randomName,
    content: randomContent,
    id: 1
  },
  {
    image: randomImage,
    title: randomTitle,
    author: randomName,
    content: randomContent,
    id: 2
  },
  {
    image: randomImage,
    title: randomTitle,
    author: randomName,
    content: randomContent,
    id: 3
  },
  {
    image: randomImage,
    title: randomTitle,
    author: randomName,
    content: randomContent,
    id: 4
  },
  {
    image: randomImage,
    title: randomTitle,
    author: randomName,
    content: randomContent,
    id: 5
  },
]
class App extends Component {
  state = {
    posts: [...news]
  }

  removeHandler = index => 
  
  
  
  
  {
    const old = [...this.state.posts];

    old.splice(index, 1);

    this.setState({posts: old});
  }

  render() {
    console.log(this.state.posts);

    const postList = [...this.state.posts].map((post, index) => 
    <Post
      key={post.id}
      onClick={this.removeHandler.bind(this, index)}
      image={post.image}
      title={post.title}
      author={post.author}
      content={post.content}
    />);

    return (
      <div className="posts">
        {postList}
      </div>
    );
  }
}

export default App;

