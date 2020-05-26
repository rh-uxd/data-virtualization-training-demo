import React from 'react';
import {
  Button
} from '@patternfly/react-core';
import './LabelInfo.css';
import { InfoCircleIcon } from '@patternfly/react-icons';

const LabelInfo = ({ text }) => (
  <div className="app__label-info">
    <span>{text}</span>
    <InfoCircleIcon/>
  </div>
);

export {LabelInfo};
