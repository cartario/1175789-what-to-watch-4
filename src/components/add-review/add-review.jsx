import React from "react";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../const.js";
import PropTypes from "prop-types";
import {getCurrentMovie} from "../../selectors.js";
import withReview from "../../hocs/with-review/with-review.js";

const DEFAULT_CHECKED = 1;

const AddReview = (props) => {
  const {films, activeFilmId, isCommentLoading, isReviewErr,
    maxLength, minLength, comment, rating, postNewCommentHandler, changeRatingComment, changeTextComment
  } = props;

  const currentMovie = getCurrentMovie(films, activeFilmId);
  const {title, backgroundImage, posterImage} = currentMovie;
  const isSubmitBtnBlocked = !(comment && rating && !isCommentLoading);

  return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header">
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>
              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={AppRoutes.ROOT} className="breadcrumbs__link">{title}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>
              <div className="user-block">
                <Link to={AppRoutes.ROOT}>
                  <div className="user-block__avatar">
                    <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </div>
                </Link>
              </div>
            </header>
            <div className="movie-card__poster movie-card__poster--small">
              <img src={posterImage} alt={title} width="218" height="327"/>
            </div>
          </div>
          <div className="add-review">
            <form onSubmit={(e) => {
              postNewCommentHandler(e, activeFilmId);
            }} action="#" className="add-review__form">
              <div className="rating">
                <div className="rating__stars" onChange = {changeRatingComment}>
                  {[1, 2, 3, 4, 5].map((star) =>
                    <React.Fragment key = {star}>
                      <input
                        className="rating__input"
                        id={`star-${star}`}
                        type="radio"
                        name="rating"
                        value={star}
                        defaultChecked = {star === DEFAULT_CHECKED && true}
                      />
                      <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
                    </React.Fragment>
                  )}
                </div>
                <div className="add-review__text">
                  <textarea
                    onChange={changeTextComment}
                    className="add-review__textarea"
                    name="review-text"
                    id="review-text"
                    placeholder="Review text"
                    maxLength={maxLength}
                    minLength={minLength}
                  >
                  </textarea>
                  <div className="add-review__submit">
                    <button disabled = {isSubmitBtnBlocked} className="add-review__btn" type="submit">
                      {isSubmitBtnBlocked ? `` : `Post`}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {isReviewErr && <p style={{backgroundColor: `red`}}>Something went wrong...</p>}
          </div>
        </section>
      </>
  );

};

AddReview.propTypes = {
  isCommentLoading: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
      })
  ).isRequired,
  activeFilmId: PropTypes.string.isRequired,
  isReviewErr: PropTypes.bool.isRequired,
  maxLength: PropTypes.number.isRequired,
  minLength: PropTypes.number.isRequired,
  comment: PropTypes.string,
  rating: PropTypes.number.isRequired,
  postNewCommentHandler: PropTypes.func.isRequired,
  changeRatingComment: PropTypes.func.isRequired,
  changeTextComment: PropTypes.func.isRequired,
};

export {AddReview};
export default withReview(AddReview);
