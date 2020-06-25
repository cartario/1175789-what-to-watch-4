import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: this.props.isPlaying,
    };
  }

  render() {
    const {film} = this.props;
    return (
      <video
        src={film.preview}
        poster={film.src}
        autoPlay={this.state.isPlaying}
        muted

        width="280"
        height="175">
      </video>);
  }
}

Player.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
};

export default Player;
