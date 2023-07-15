import React from "react";
import PropTypes from "prop-types";
import './AboutStyle.css';

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      title="About IZSoftwares"
      width="250"
      height="250"
      src="https://www.youtube.com/embed/_zShxJofkjU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      allowfullscreen="allowfullscreen"
    />
  </div>
);

export default YoutubeEmbed;