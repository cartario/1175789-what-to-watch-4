import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllFilms, getCurrentMovie, getAllComments} from "../../../selectors.js";


const Reviews = (props) => {

  const {comments} = props;


  return (
    <>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.map((comment) =>
          <div key={comment.date} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime={comment.date}>{comment.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{comment.rating}</div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  currentMovie: getCurrentMovie(state),
  comments: getAllComments(state),
});

Reviews.propTypes = {
  comments: PropTypes.array.isRequired,
};

export {Reviews};
export default connect(mapStateToProps)(Reviews);
