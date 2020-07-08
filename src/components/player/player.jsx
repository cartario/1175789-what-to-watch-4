import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import withVideo from "../../hocs/with-video/with-video.js";

const Player = (props) => {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
};

Player.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  isPlaying: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default withVideo(Player);
