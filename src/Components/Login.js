import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux'
import { postLogin } from '../actions'
import NavLogin from "./Nav/NavLogin";


const LoginPage = ({ touched, errors }) => {
  return (
    <section className="login-page">
      <header>
        <NavLogin />
      </header>
      <h1>Login Here</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="UN">{errors.username}</p>
        )}
        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="PW">{errors.password}</p>
        )}
        <button type="submit">Login</button>
      </Form>
    </section>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { props, setStatus }) {
    props.postLogin(values)
    setTimeout(()=>{props.history.push('/homepage')},1500)
  }
})(LoginPage);

export default connect(null, { postLogin })(FormikLoginForm);
console.log("this is the HOC", FormikLoginForm);
