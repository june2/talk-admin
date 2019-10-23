import React, { Fragment } from 'react';
import _get from 'lodash/get';
import { Labeled } from 'react-admin';

const ImagesThumbField = ({ record, label }) => {
  const items = [];
  for (const [i, val] of record.images.entries()) {
    if (null !== val) {
      items.push(<img
        src={val}
        width="200"
        style={{ padding: 10 }}
        key={i}
        onClick={() => window.open(val)}
      />)
    }
  }
  return (
    <Labeled label={label}>
      <Fragment>
        {items}
      </Fragment>
    </Labeled>
  );
};
export default ImagesThumbField;