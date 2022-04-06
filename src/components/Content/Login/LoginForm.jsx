import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./Login.module.css"

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object(),
    onSubmit: (values, {setStatus, setSubmitting}) => {
      props.login(values.username, values.password, setStatus, setSubmitting);
      setSubmitting(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          onChange={formik.handleChange}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      {formik.status && <div className={classes.error} >{formik.status.error}</div>}
      <div>
        <button
          type="submit"
          disabled={!formik.values.username || !formik.values.password || formik.isSubmitting}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
