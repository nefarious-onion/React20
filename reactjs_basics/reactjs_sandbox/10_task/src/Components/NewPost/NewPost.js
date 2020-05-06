import React from "react";
import "./NewPost.css";

const NewPost = () => {
  return (
    <>
      <h1>Add new post</h1>
      <form className="newPost">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea type="text" name="desc" id="desc" />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input type="text" name="img" id="img" />
        </div>
        <button type="submit">Add new post</button>
      </form>
    </>
  );
};

export default NewPost;
