import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import { DataPermission } from './../DataPermissionComponents/DataPermission';
import { Views } from './../ViewsComponent/Views';
import { Metrics } from './../MetricsComponent/Metrics';
import { Versions } from './../VersionsComponent/Versions';
import { SQLClient } from './../SQLClientComponent/SQLClient';

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
      <BreadcrumbItem to="#">Home</BreadcrumbItem>
      <BreadcrumbItem to="#">Data</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>Test Virtualization</BreadcrumbItem>
    </Breadcrumb>
  );

  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        { breadcrumbItems }
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        Test
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
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
