import React, {createRef} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {history} from "../../history.js";

const SignIn = (props) => {
  const {login} = props;

  const loginRef = createRef();
  const passwordRef = createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      login: loginRef.current.value,
      password: passwordRef.current.value};
    login(data);

    history.push(`/`);
  };

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to = "/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form onSubmit={submitHandler} action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref = {loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref = {passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button type="submit" className="sign-in__btn" >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};

export default SignIn;
