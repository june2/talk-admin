import _get from 'lodash/get';
import React from 'react';

function diffYears(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24); // year difference
  return Math.abs(Math.round(diff/365.25));
}

const AgeField = ({ record = {}, source, dateNow = new Date() }) => {
  const value = new Date(_get(record, source, dateNow));
  const parsedValue = diffYears(value, dateNow);
    return (<span>{parsedValue}</span>);
}

export default AgeField;