import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer/films-by-genre/films-by-genre.js";
import {history} from "../../history.js";
import PropTypes from "prop-types";

const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: null,
        maxLength: 400,
        minLength: 50,
      };

      this._changeRatingComment = this._changeRatingComment.bind(this);
      this._changeTextComment = this._changeTextComment.bind(this);
      this._postNewCommentHandler = this._postNewCommentHandler.bind(this);
    }

    _postNewCommentHandler(e, activeFilmId) {
      e.preventDefault();

      this.props.postNewComment(activeFilmId, {
        rating: this.state.rating,
        comment: this.state.comment,
      });

      this.setState({
        rating: 1,
        comment: null,
      });

      history.goBack();
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

    render() {
      return (
        <Component
          {...this.props}
          maxLength = {this.state.maxLength}
          minLength = {this.state.minLength}
          rating = {this.state.rating}
          comment = {this.state.comment}
          changeRatingComment = {this._changeRatingComment}
          changeTextComment = {this._changeTextComment}
          postNewCommentHandler = {this._postNewCommentHandler}
          isReviewErr = {this.props.isReviewErr}
          isCommentLoading = {this.props.isCommentLoading}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    isCommentLoading: state.FILMS.isCommentLoading,
    isReviewErr: state.FILMS.isReviewError,
  });

  const mapDispatchToProps = (dispatch) => ({
    postNewComment(userId, commentPost) {
      dispatch(Operation.postNewComment(userId, commentPost));
    }
  });

  WithAddReview.propTypes = {
    postNewComment: PropTypes.func.isRequired,
    isCommentLoading: PropTypes.bool.isRequired,
    isReviewErr: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithAddReview);
};

export default withAddReview;
