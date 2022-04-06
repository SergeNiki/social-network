import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./Singup.module.css";

const SignupForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("invalid email address")
        .max(60, "must be 60 characters or less")
        .required("email cannot be empty"),
      username: Yup.string()
        .max(30, "must be 30 characters or less")
        .required("username cannot be empty"),
      password: Yup.string()
        .max(30, "must be 30 characters or less")
        .min(8, "must be 8 characters or more")
        .required("password cannot be empty"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "passwords do not match"
      ),
    }),
    onSubmit: (values, { setStatus, setSubmitting }) => {
      props.signup(
        values.email,
        values.username,
        values.password,
        setStatus,
        setSubmitting
      );
      setSubmitting(true);
    },
  });

  
  console.log(formik.status)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className={classes.error}>{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <p className={classes.error}>{formik.errors.username}</p>
        ) : null}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className={classes.error}>{formik.errors.password}</p>
        ) : null}
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className={classes.error}>{formik.errors.confirmPassword}</p>
        ) : null}
      </div>
      {formik.status && <div className={classes.error}>{formik.status.password}</div>}
      <div>
        <button
          type="submit"
          disabled={
            !formik.values.email ||
            !formik.values.username ||
            !formik.values.password ||
            !formik.values.confirmPassword ||
            // formik.errors ||
            formik.isSubmitting
          }
        >
          Sing Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
