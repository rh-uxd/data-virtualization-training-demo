import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Divider,
  Flex,
  FlexItem,
  FlexModifiers,
  Level,
  LevelItem,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';
import { routes } from '@app/routes';
import { DataPermission } from './../DataPermissionComponents/DataPermission';
import { Views } from './../ViewsComponent/Views';
import { Metrics } from './../MetricsComponent/Metrics';
import { Versions } from './../VersionsComponent/Versions';
import { SQLClient } from './../SQLClientComponent/SQLClient';
import { LabelComponent } from '../CustomComponents/LabelCustomComponent/LabelComponent';
import { InlineEdit } from '../CustomComponents/InlineEditComponent/InlineEdit';
import './Test.css';

const Test = () => {

  const [activeNavItem, setActiveNavItem] = useState(0);

  const onSelectNavItem = (result) => {
    setActiveNavItem(result.itemId);
  }

  const displayCardData = (activeNavItem) => {
    if(activeNavItem == 1) {
      return <SQLClient/>
    }
    else if(activeNavItem == 2) {
      return <Versions/>
    }
    else if(activeNavItem == 3) {
      return <Metrics/>
    }
    else if(activeNavItem == 4) {
      return <DataPermission/>
    }
    else {
      return <Views/>
    }
  };

  const breadcrumbItems = (
    <Breadcrumb>
      <BreadcrumbItem to={routes[0].path}>Home</BreadcrumbItem>
      <BreadcrumbItem to={routes[1].path}>Data</BreadcrumbItem>
      <BreadcrumbItem isActive>Test Virtualization</BreadcrumbItem>
    </Breadcrumb>
  );

  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light} className="app__page-section-breadcrumb">
        <Level>
          <LevelItem>
            { breadcrumbItems }
          </LevelItem>
          <LevelItem>
            <Button variant="secondary">Publish</Button>
          </LevelItem>
        </Level>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        <Flex breakpointMods={[{modifier: FlexModifiers["space-items-md"]}]}>
          <FlexItem>
            <Title headingLevel="h1" size={'2xl'}>
              Test
            </Title>
            <InlineEdit text="test"/>
          </FlexItem>
          <FlexItem>
            <Flex breakpointMods={[{modifier: FlexModifiers["space-items-xl"]}]}>
              <FlexItem>
                <LabelComponent text="Stopped"/>
              </FlexItem>
              <Divider className="pf-m-vertical"/>
              <FlexItem>
                <LabelComponent text="Draft" color="grey"/>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </PageSection>
      <PageSection variant={PageSectionVariants.light} className="app__page-section-nav">
        <Nav onSelect={onSelectNavItem}>
          <NavList variant={NavVariants.tertiary}>
            <NavItem itemId="0" isActive={activeNavItem === 0}>
              Views
            </NavItem>
            <NavItem itemId="1" isActive={activeNavItem === 1}>
              SQL client
            </NavItem>
            <NavItem itemId="2" isActive={activeNavItem === 2}>
              Versions
            </NavItem>
            <NavItem itemId="3" isActive={activeNavItem === 3}>
              Metrics
            </NavItem>
            <NavItem itemId="4" isActive={activeNavItem === 4}>
              Data Permission
            </NavItem>
          </NavList>
        </Nav>
      </PageSection>
      <PageSection>
        <Card>
          { displayCardData(activeNavItem) }
        </Card>
      </PageSection>
    </React.Fragment>
  )
};

export { Test };
