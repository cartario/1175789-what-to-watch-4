import React from "react";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoutes} from "../../const.js";
import PropTypes from "prop-types";

const Header = (props) => {
  const {authorizationStatus, currentMovie} = props;

  const {title, backgroundImage} = currentMovie;

  return (
    <>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <Link to={AppRoutes.MY_LIST}>
              <div className="user-block__avatar">
                <img
                  src="/img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </Link>
          ) : (
            <Link to={AppRoutes.LOGIN} className="user-block__link">
              Sign in
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }),
};

export default Header;
