import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img
        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
        alt="ava"
      />
      <p>{props.text}</p>
      <span>Likes: {props.likes}</span>
    </div>
  );
};

export default Post;
