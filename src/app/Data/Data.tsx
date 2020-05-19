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
  Dropdown,
  DropdownItem,
  DropdownPosition,
  Flex,
  FlexItem,
  FlexModifiers,
  KebabToggle,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  DataListAction,
  PageSection,
  PageSectionVariants,
  OverflowMenu,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuControl,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import { CubeIcon } from '@patternfly/react-icons';
import './Data.css';
import { IconLinkButton } from '../CustomComponents/IconLinkButtonComponent/IconLinkButton';
import { LabelInfo } from '../CustomComponents/LabelInfoComponent/LabelInfo';
import { LabelComponent } from '../CustomComponents/LabelCustomComponent/LabelComponent';
import { DataDataToolbar } from './DataDataToolbar';

const Data = () => {

  const [toggle1IsOpen, toggle1SetIsOpen] = useState(false);
  const [toggle2IsOpen, toggle2SetIsOpen] = useState(false);

  const onToggle1 = (toggle1IsOpen) => {
    toggle1SetIsOpen(toggle1IsOpen);
  };

  const onToggle2 = (toggle2IsOpen) => {
    toggle2SetIsOpen(toggle2IsOpen);
  }

  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Flex breakpointMods={[{modifier: FlexModifiers["inline-flex"]}]}>
            <FlexItem>
              <Text component={TextVariants.h1}>
                Data Virtualizations
              </Text>
            </FlexItem>
            <FlexItem>
              <LabelInfo text="Technology Preview"/>
            </FlexItem>
          </Flex>
          <Text component={TextVariants.p}>
            Syndesis creates and manages data virtualizations to expose as data source connections.
          </Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <Card>
          <DataDataToolbar/>
          <DataList className="app__data-list" aria-label="">
            <DataListItem aria-labelledby="">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isIcon key="icon">
                      <CubeIcon className="app__icon--xl"/>
                    </DataListCell>,
                    <DataListCell key="1">
                      <span id="item-1">Foo</span>
                    </DataListCell>,
                    <DataListCell key="2" isFilled={false} alignRight>
                      <IconLinkButton text="Secured"/>
                    </DataListCell>,
                    <DataListCell key="3" isFilled={false} alignRight className="app__data-list-cell--m-label">
                      <LabelComponent text="Error"/>
                    </DataListCell>
                  ]}
                />
                  <DataListAction
                    aria-labelledby=""
                    id=""
                    aria-label="Actions"
                  >
                    <OverflowMenu breakpoint="lg">
                      <OverflowMenuContent>
                        <OverflowMenuGroup groupType="button">
                          <Link to={routes[2].path}>
                            <Button>
                              Test
                            </Button>
                          </Link>
                          <Dropdown
                            isPlain
                            position={DropdownPosition.right}
                            isOpen={toggle1IsOpen}
                            toggle={<KebabToggle onToggle={onToggle1} />}
                            dropdownItems={[
                              <DropdownItem key="action" component="button">
                                Action
                              </DropdownItem>
                            ]}
                          />
                        </OverflowMenuGroup>
                      </OverflowMenuContent>
                      <OverflowMenuControl>
                        <Dropdown
                          isPlain
                          position={DropdownPosition.right}
                          isOpen={toggle2IsOpen}
                          toggle={<KebabToggle onToggle={onToggle2} />}
                          dropdownItems={[
                            <DropdownItem key="pri-action2" component="button">
                              Action
                            </DropdownItem>,
                            <DropdownItem key="sec-action2" component="button">
                              Test
                            </DropdownItem>
                          ]}
                        />
                      </OverflowMenuControl>
                    </OverflowMenu>
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
