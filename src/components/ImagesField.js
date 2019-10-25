import React, { Fragment } from 'react';
import _get from 'lodash/get';

const thumbStyle = {
  width: '60px',
  height: '60px'
}

const ImagesField = ({ source, record = {} }) => {
  try {    
    const images = _get(record, source);
    return (
      <Fragment>
        {images.map((link, idx) => <img src={link} style={thumbStyle} key={idx} />)}
      </Fragment>
    );
  } catch (e) {
    return null;
  }
}

export default ImagesField;