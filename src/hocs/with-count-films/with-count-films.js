import React, {PureComponent} from "react";

const SHOWING_BY_BTN_CLICK = 8;
const SHOWING_FILMS_BY_START = 8;

const withCountFilms = (Component) => {
  class WithCountFilms extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        showingFilmsCount: SHOWING_FILMS_BY_START,
      };
      this.showMoreClickHandler = this.showMoreClickHandler.bind(this);
    }

    showMoreClickHandler() {
      this.setState({
        showingFilmsCount: this.state.showingFilmsCount + SHOWING_BY_BTN_CLICK,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onShowMoreClickHandler = {this.showMoreClickHandler}
          showingFilmsCount = {this.state.showingFilmsCount}
        />
      );
    }
  }
  return WithCountFilms;
};

export default withCountFilms;
