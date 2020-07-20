import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Overview from "./overview/overview.jsx";
import Details from "./details/details.jsx";
import Reviews from "./reviews/reviews.jsx";
import {TabNames} from "../../const.js";
import {Operation} from "../../reducer/films-by-genre/films-by-genre.js";
import {connect} from "react-redux";
import {getCurrentMovie} from "../../selectors.js";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: TabNames.OVERVIEW,
    };
  }

  _renderCurrentTab() {
    switch (this.state.currentTab) {
      case TabNames.DETAILS:
        return <Details/>;
      case TabNames.REVIEWS:
        return <Reviews/>;
      default :
        return <Overview/>;
    }
  }

  clickHandler(tab) {
    this.setState({currentTab: tab});
    this.props.loadComments(this.props.currentMovie.id);
  }

  render() {
    return (
      <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabNames).map((tab) =>
              <li key = {tab} onClick={()=>this.clickHandler(tab)} className={this.state.currentTab === tab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                <a onClick={(e)=>e.preventDefault()} href="#" className="movie-nav__link">{tab}</a>
              </li>
            )}
          </ul>
        </nav>
        {this._renderCurrentTab()}

      </div>
    </>
    );

  }
}

const mapStateToProps = (state) => ({
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    dispatch(Operation.loadComments(filmId));
  }
});

Tabs.propTypes = {
  currentMovie: PropTypes.shape({
    id: PropTypes.number,
  }),
  loadComments: PropTypes.func,
};


export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
