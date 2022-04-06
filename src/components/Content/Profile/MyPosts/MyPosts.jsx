import React from "react";
import Post from "./Post/Post";
import PostForm from "./PostForm";

const MyPosts = ({ postsData, addPost }) => {
  const posts = postsData.map((post) => (
    <Post key={post.id} text={post.text} likes={post.likesCount} />
  ));

  return (
    <div>
      <h4>My posts:</h4>
      <div>
        <PostForm addPost={addPost} />
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
