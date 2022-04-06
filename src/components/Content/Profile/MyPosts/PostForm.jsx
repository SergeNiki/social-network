import { useFormik } from "formik";
import classes from "./MyPosts.module.css";

const PostForm = ({ addPost }) => {
  const formik = useFormik({
    initialValues: {
      postText: "",
    },
    onSubmit: (values, {resetForm}) => {
      if (values.postText) addPost(values.postText);      
      resetForm()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form_block} >
      <div>
        <input
          type="text"
          name="postText"
          placeholder="What's new?"
          onChange={formik.handleChange}
          value={formik.values.postText}
        />
      </div>
      <div>
        <button type="submit" disabled={!formik.values.postText}>
          Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
