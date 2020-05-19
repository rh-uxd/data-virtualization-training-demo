import React from 'react';
import {
  Button
} from '@patternfly/react-core';
import { LockIcon } from '@patternfly/react-icons';
import './IconLinkButton.css';

const IconLinkButton = ({ text }) => (
  <div className="app__inline-link-button">
    <LockIcon/>
    <Button variant="link" isInline>
      {text}
    </Button>
  </div>
);

export {IconLinkButton};
