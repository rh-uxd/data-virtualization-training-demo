import React, {useState} from 'react';
import {
  Button,
  DataToolbar,
  DataToolbarItem,
  DataToolbarGroup,
  DataToolbarContent,
  InputGroup,
  TextInput
} from '@patternfly/react-core';
import './Data.css';
import { SortAlphaDownIcon } from '@patternfly/react-icons';

const DataDataToolbar = () => {

  const items = (
    <React.Fragment>
      <DataToolbarItem>
        <InputGroup>
          <TextInput name="textInput1" id="textInput1" type="search" placeholder="Filter by name" aria-label="search input example" />
        </InputGroup>
      </DataToolbarItem>
      <DataToolbarItem>
        <Button variant="plain" aria-label="edit">
          <SortAlphaDownIcon />
        </Button>
      </DataToolbarItem>
      <DataToolbarGroup variant="button-group">
        <DataToolbarItem><Button variant="secondary">Import</Button></DataToolbarItem>
        <DataToolbarItem><Button variant="primary">Create Data Virtualization</Button></DataToolbarItem>
      </DataToolbarGroup>
    </React.Fragment>
  );

  return (
    <DataToolbar id="app-data-toolbar">
      <DataToolbarContent>{items}</DataToolbarContent>
    </DataToolbar>
  );
}

export {DataDataToolbar};
