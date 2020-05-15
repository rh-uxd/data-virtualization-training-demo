import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { routes } from '@app/routes';
import { NavLink } from 'react-router-dom';
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
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { CubeIcon } from '@patternfly/react-icons';
import './Data.css';
import { IconLinkButton } from '../CustomComponents/IconLinkButton';



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
        <TextContent>
          <Text component={TextVariants.h1}>
            Data Virtualizations
          </Text>
          <Text component={TextVariants.p}>
            Syndesis creates and manages data virtualizations to expose as data source connections.
          </Text>
        </TextContent>
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
                    <DataListCell isIcon key="icon">
                      <CubeIcon className="app__button--xl"/>
                    </DataListCell>,
                    <DataListCell key="1">
                      <span id="item-1">Foo</span>
                    </DataListCell>,
                    <DataListCell key="2" isFilled={false} alignRight>
                      <IconLinkButton text="Secured"/>
                    </DataListCell>
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
