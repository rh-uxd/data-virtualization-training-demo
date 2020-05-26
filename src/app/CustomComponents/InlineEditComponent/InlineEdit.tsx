import React from 'react';
import {
  Button
} from '@patternfly/react-core';
import './InlineEdit.css';
import { PencilAltIcon } from '@patternfly/react-icons';

const InlineEdit = ({ text }) => (
  <div className="app__inline-edit">
    <span>{text}</span>
    <Button variant="plain" aria-label="Edit">
      <PencilAltIcon/>
    </Button>
  </div>
);

export {InlineEdit};
