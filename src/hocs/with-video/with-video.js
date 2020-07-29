import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withCard = (Component) => {
  class WithCard extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
      this._timeout = null;

      this.state = {
        isPlaying: false,
        isMuted: true,
        activeFilmId: null,
      };

      this._handlerMouseOver = this._handlerMouseOver.bind(this);
      this._handlerMouseLeave = this._handlerMouseLeave.bind(this);
    }

    componentDidMount() {
      const {film} = this.props;
      const video = this._videoRef.current;
      video.src = film.preview;
      video.poster = film.src;
      video.width = `280`;
      video.height = `175`;
      video.muted = this.state.isMuted;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        this._timeout = setTimeout(() => {
          this._videoRef.current.play();
        }, 1000);
      } else {
        clearTimeout(this._timeout);
        video.load();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = ``;
      video.poster = ``;
      video.width = null;
      video.height = null;
      video.muted = null;
    }

    _handlerMouseOver() {
      this.setState({
        isPlaying: true,
      });
    }

    _handlerMouseLeave() {
      this.setState({
        isPlaying: false,
      });
    }

    render() {
      return (
        <Component
          videoRef={this._videoRef}
          handlerMouseOver={this._handlerMouseOver}
          handlerMouseLeave={this._handlerMouseLeave}
          {...this.props}
        ></Component>
      );
    }
  }

  WithCard.propTypes = {
    film: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    }),
  };

  return WithCard;
};

export default withCard;
