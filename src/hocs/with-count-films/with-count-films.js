import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const SHOWING_BY_BTN_CLICK = 4;
const SHOWING_FILMS_BY_START = 8;

const withCountFilms = (Component) => {
  class WithCountFilms extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showingFilmsCount: SHOWING_FILMS_BY_START,
        isVisible: true,
      };

      this.showMoreClickHandler = this.showMoreClickHandler.bind(this);
    }

    showMoreClickHandler() {
      const {films} = this.props;

      let newState = this.state.showingFilmsCount + SHOWING_BY_BTN_CLICK;
      if (newState < films.length) {

        this.setState({
          showingFilmsCount: this.state.showingFilmsCount + SHOWING_BY_BTN_CLICK,
        });

        return;
      }

      this.setState({
        isVisible: false,
        showingFilmsCount: films.length,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          showMoreClickHandler = {this.showMoreClickHandler}
          showingFilmsCount = {this.state.showingFilmsCount}
          isVisible = {this.state.isVisible}
        />
      );
    }
  }

  WithCountFilms.propTypes = {
    films: PropTypes.array.isRequired,
  };

  return WithCountFilms;
};

export default withCountFilms;
