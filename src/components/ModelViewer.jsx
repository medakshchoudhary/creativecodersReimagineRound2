// src/components/ModelViewer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '@google/model-viewer';

const ModelViewer = ({ src, alt, environmentImage, poster, shadowIntensity }) => {
  return (
    <model-viewer
      alt={alt}
      src={src}
      ar
      environment-image={environmentImage}
      poster={poster}
      shadow-intensity={shadowIntensity}
      camera-controls
      touch-action="pan-y"
      style={{ width: '100%', height: '100%' }}
    ></model-viewer>
  );
};

ModelViewer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  environmentImage: PropTypes.string,
  poster: PropTypes.string,
  shadowIntensity: PropTypes.string,
};

export default ModelViewer;
