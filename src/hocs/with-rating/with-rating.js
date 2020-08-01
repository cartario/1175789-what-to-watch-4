// import React, {PureComponent, createRef} from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import {Operation} from "../../reducer/films-by-genre/films-by-genre.js";


// const withRating = (Component) => {

//   class WithRating extends PureComponent {
//     constructor(props) {
//       super(props);
// debugger;
//       this._changeRatingComment = this._changeRatingComment.bind(this);
//       this._changeTextComment = this._changeTextComment.bind(this);

//       this.state = {
//         rating: null,
//         comment: null,
//       };
//     }

//     _changeRatingComment(e) {
//       this.setState({
//         rating: e.target.value,
//       });
//     }

//     _changeTextComment(e) {
//       this.setState({
//         comment: e.target.value,
//       });
//     }

//     _postNewCommentHandler(e) {
//       e.preventDefault();
//       this.props.postNewComment(this.props.activeFilmId, {
//         rating: this.state.rating,
//         comment: this.state.comment,
//       });
//     }

//     render() {
//       return (
//         <>
//           <Component {...this.props}
//             rating={this.state.rating}
//             comment = {this.state.comment}
//             changeRatingHandler = {this._changeRatingComment}
//             changeTextComment = {this._changeTextComment}
//             postNewCommentHandler = {this._postNewCommentHandler}
//             />
//         </>
//       )
//     }

//   }

//   const mapDispatchToProps = (dispatch) => ({
//     postNewComment(userId, commentPost) {
//       dispatch(Operation.postNewComment(userId, commentPost));
//     }
//   });

//   return connect(null, mapDispatchToProps)(WithRating);
// };

// export default withRating;


