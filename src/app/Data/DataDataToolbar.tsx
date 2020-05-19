import React, {useState} from 'react';
import {
  Button,
  DataToolbar,
  DataToolbarItem,
  DataToolbarGroup,
  DataToolbarToggleGroup,
  DataToolbarContent,
  InputGroup,
  TextInput
} from '@patternfly/react-core';
import './Data.css';
import { SortAlphaDownIcon, FilterIcon } from '@patternfly/react-icons';

const DataDataToolbar = () => {

  const items = (
    <React.Fragment>
      <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint='xl'>
        <DataToolbarItem>
          <InputGroup>
            <TextInput name="textInput1" id="textInput1" type="search" placeholder="Filter by name" aria-label="search input example" />
          </InputGroup>
        </DataToolbarItem>
      </DataToolbarToggleGroup>
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
    <DataToolbar
      id="app-data-toolbar"
      collapseListedFiltersBreakpoint='xl'
    >
      <DataToolbarContent>{items}</DataToolbarContent>
    </DataToolbar>
  );
}

export {DataDataToolbar};
