import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      address: ""
    },
    onRegisterSubmit
  );

  return (
    <section id="register-page" className="content auth">
      <form id="register" method="post" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>REGISTER</h1>

          <label htmlFor="username"/>
          <input
              type="username"
              id="username"
              name="username"
              placeholder="Enter name"
              value={values.username}
              onChange={changeHandler}
          />
          <label htmlFor="email"/>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={values.email}
            onChange={changeHandler}
          />

          <label htmlFor="pass"/>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            id="register-password"
            value={values.password}
            onChange={changeHandler}
          />

          <label htmlFor="con-pass"/>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat password"
            id="confirm-password"
            value={values.confirmPassword}
            onChange={changeHandler}
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
