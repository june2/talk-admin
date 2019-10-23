import _get from 'lodash/get';
import React from 'react';
import { Labeled } from 'react-admin';

function diffYears(dt2, dt1) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24); // year difference
  return Math.abs(Math.round(diff/365.25));
}

const AgeInput = ({ record = {}, source, dateNow = new Date(), label }) => {
  const value = new Date(_get(record, source, dateNow));
  const parsedValue = diffYears(value, dateNow);
    return (<Labeled label={label}><span>{parsedValue}</span></Labeled>);
}

export default AgeInput;