import _get from 'lodash/get';
import React from 'react';

const ParseField = ({ record = {}, source, enums }) => {
  try {
  const value = _get(record, source);
  const parsedValue = enums[value];
    return (
      <span>{parsedValue ? parsedValue : value }</span>
    );
  } catch (e) {
    return (
      <span>값 오류</span>
    );
  }
}

export default ParseField;