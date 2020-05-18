import React from 'react';
import {
  Label
} from '@patternfly/react-core';
import './LabelComponent.css';

const LabelComponent = ({ text }) => {

  function colorFunc(text) {
    if ( text === 'Error') {
      return 'app__label-error'
    }
    else if ( text === 'Stopped') {
      return 'app__label-stopped'
    }
    else {
      return ''
    }
  }

  return (
    <Label className={ colorFunc(text) }>
    { text }
  </Label>
  )
};

export {LabelComponent};
