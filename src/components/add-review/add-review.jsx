import React, {PureComponent, createRef} from "react";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../const.js";
import {connect} from "react-redux";
import {Operation} from "../../reducer/films-by-genre/films-by-genre.js";
import PropTypes from "prop-types";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.sendReviewErr = null;
    this.sendReviewOk = null;

    this._textRef = createRef();

    this._changeRatingComment = this._changeRatingComment.bind(this);
    this._changeTextComment = this._changeTextComment.bind(this);
    this._postNewCommentHandler = this._postNewCommentHandler.bind(this);

    this.state = {
      rating: null,
      comment: null,
    };
  }

  componentidUpdate() {

  }

  _changeRatingComment(e) {
    this.setState({
      rating: e.target.value,
    });
  }

  _changeTextComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  _postNewCommentHandler(e) {
    e.preventDefault();

    this.props.postNewComment(this.props.activeFilmId, {
      rating: this.state.rating,
      comment: this.state.comment,
    });

    this._textRef.current.value = ``;
  }

  getFeedbackStatus() {
    if (this.sendReviewErr) {
      return (
        <div>
          <p style={
            {
              padding: `5px`,
              backgroundColor: `red`
            }}>Something went wrong...</p>
        </div>
      );
    } else if (this.sendReviewOk) {
      return (
        <div>
          <p style={
            {
              padding: `5px`,
              backgroundColor: `green`
            }}>Succesfull!</p>
        </div>);
    } return null;
  }

  render() {
    const {films, activeFilmId, isCommentLoading, isReviewSent, isReviewErr} = this.props;

    const currentMovie = films.find(
        (film) => film.id === Number(activeFilmId)
    );
    const {title, backgroundImage, posterImage} = currentMovie;
    const isSubmitBtnBlocked = !(this.state.comment && this.state.rating && !isCommentLoading);

    this.sendReviewOk = isReviewSent;
    this.sendReviewErr = isReviewErr;

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
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                  </div>
                </Link>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={posterImage} alt={title} width="218" height="327"/>
            </div>
          </div>

          <div className="add-review">
            <form onSubmit={this._postNewCommentHandler} action="#" className="add-review__form">
              <div className="rating">
                <div className="rating__stars" onChange = {this._changeRatingComment}>
                  {[1, 2, 3, 4, 5].map((star) =>
                    <React.Fragment key = {star}>
                      <input
                        className="rating__input"
                        id={`star-${star}`}
                        type="radio"
                        name="rating"
                        value={star}

                      />
                      <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
                    </React.Fragment>
                  )}
                </div>
                <div className="add-review__text">
                  <textarea
                    ref={this._textRef}
                    onChange={this._changeTextComment}
                    className="add-review__textarea"
                    name="review-text"
                    id="review-text"
                    placeholder="Review text"
                    maxLength="400"
                    minLength="50"
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
            {this.getFeedbackStatus()}
          </div>

        </section>
      </>
    );
  }
}

AddReview.propTypes = {

  currentMovie: PropTypes.shape({
    id: PropTypes.any,
    title: PropTypes.string,
    backgroundImage: PropTypes.string,
    posterImage: PropTypes.string,
  }),
  postNewComment: PropTypes.func.isRequired,
  isCommentLoading: PropTypes.any,
  films: PropTypes.any,
  activeFilmId: PropTypes.any,
  isReviewSent: PropTypes.any,
  isReviewErr: PropTypes.any,
};

const mapStateToProps = (state) => ({
  isCommentLoading: state.FILMS.isCommentLoading,
  isReviewSent: state.FILMS.isReviewSent,
  isReviewErr: state.FILMS.isReviewError,
});

const mapDispatchToProps = (dispatch) => ({
  postNewComment(userId, commentPost) {
    dispatch(Operation.postNewComment(userId, commentPost));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
