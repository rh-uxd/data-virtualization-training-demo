import React from 'react';
import {
  Label
} from '@patternfly/react-core';
import './LabelComponent.css';

const LabelComponent = ({ text, ...props}) => {

  function colorFunc(text, color) {
    if ( text === 'Error') {
      return 'app__label-error'
    }
    else if ( text === 'Stopped') {
      return 'app__label-stopped'
    }
    else if ( color === 'grey') {
      return 'app__label--m-grey'
    }
    else {
      return ''
    }
  }

  return (
    <Label className={ colorFunc(text, props.color) }>
    { text }
  </Label>
  )
};

export {LabelComponent};
