import React, { Fragment } from 'react';
import _get from 'lodash/get';

const UsersField = ({ record, label }) => {
  const items = [];
  for (const [i, val] of record.users.entries()) {
    if (null !== val) {
      items.push(<div key={i}>
        <div>
          {val.gender} {val.name} {val.location}
          {val.images.length > 0 ? <img
            src={val.images[0]}
            width="40"
            key={i}
          /> : null}
        </div>
      </div>)
    }
  }
  return (
    <Fragment>
      {items}
    </Fragment>
  );
};
export default UsersField;