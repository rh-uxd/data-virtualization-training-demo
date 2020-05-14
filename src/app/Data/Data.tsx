import React, {useState} from 'react';
import {
  Button,
  Card,
  DataToolbar,
  DataToolbarItem,
  DataToolbarContent,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  DataListAction,
  InputGroup,
  TextInput,
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { routes } from '@app/routes';
import { NavLink } from 'react-router-dom';

const Data = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onToggle = (isOpen) => {
    setIsOpen(isOpen);
  };


  const items = (
    <React.Fragment>
      <DataToolbarItem>
        <InputGroup>
          <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" />
        </InputGroup>
      </DataToolbarItem>
      <DataToolbarItem><Button variant="secondary">Action</Button></DataToolbarItem>
      <DataToolbarItem variant="separator" />
      <DataToolbarItem><Button variant="primary">Action</Button></DataToolbarItem>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        Title
      </PageSection>
      <PageSection>
        <Card>
          <DataToolbar id="app-data-toolbar">
            <DataToolbarContent>{items}</DataToolbarContent>
          </DataToolbar>
          <DataList aria-label="single action data list example ">
            <DataListItem aria-labelledby="">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell key="primary content">
                      <span id="single-action-item1">Single actionable Primary content</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">Single actionable Secondary content</DataListCell>
                  ]}
                />
                  <DataListAction
                    aria-labelledby=""
                    id=""
                    aria-label="Actions"
                  >
                    <Link to={routes[2].path}>
                      <Button>
                        Test
                      </Button>
                    </Link>
                    <Dropdown
                      isPlain
                      position={DropdownPosition.right}
                      isOpen={isOpen}
                      toggle={<KebabToggle onToggle={onToggle} />}
                      dropdownItems={[
                        <DropdownItem key="action" component="button">
                          Action
                        </DropdownItem>
                      ]}
                    />
                  </DataListAction>
                </DataListItemRow>
              </DataListItem>
            </DataList>
          </Card>
          {/* <Button>
            <Link to={routes[4].path}>
              Sample
            </Link>
          </Button> */}
          {/* <Button>
            <Link to={routes[3].path}>
              Foo
            </Link>
          </Button> */}
      </PageSection>
    </React.Fragment>
  );
}

export {Data};
