import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAllComments} from "../../../selectors.js";
import {getDateFormat} from "../../../utils.js";

const getSlicedReviews = (reviews) => {
  const sliceIndex = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, sliceIndex);
  const secondColReviews = reviews.slice(sliceIndex, reviews.length);
  return [firstColReviews, secondColReviews];
};

const getReview = (comment) => {
  return (<>

            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime={comment.date}>{getDateFormat(comment.date)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{comment.rating}</div>

          </>
  );
};

const Reviews = (props) => {
  const {comments} = props;
  const slicedComments = getSlicedReviews(comments);


  return (
    <>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {slicedComments[0].map((comment) =>
          <div key={comment.date} className="review">
            {getReview(comment)}
          </div>
        )}
      </div>
      <div className="movie-card__reviews-col">
        {slicedComments[1].map((comment) =>
          <div key={comment.date} className="review">
            {getReview(comment)}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  comments: getAllComments(state),
});

Reviews.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.shape()
  ).isRequired,
};

export {Reviews};
export default connect(mapStateToProps)(Reviews);
