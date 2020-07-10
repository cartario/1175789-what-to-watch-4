import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withCard = (Component) => {
  class WithCard extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
      };
    }

    render() {
      const {film, onHover, onMouseLeave} = this.props;
      const handlerMouseOver = () => {
        onHover(film);
        this.setState({
          isPlaying: true,
        });
      };

      const handlerMouseLeave = () => {
        onMouseLeave();
        this.setState({
          isPlaying: false,
        });
      };

      return (
        <Component
          {...this.props}
          isPlaying = {this.state.isPlaying}
          handlerMouseOver = {handlerMouseOver}
          handlerMouseLeave = {handlerMouseLeave}>
        </Component>
      );
    }
  }

  WithCard.propTypes = {
    film: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    }),
    onHover: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
  };

  return WithCard;
};

export default withCard;
