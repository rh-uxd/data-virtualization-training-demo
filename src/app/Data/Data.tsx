import * as React from 'react';
import { Button, PageSection, Title } from '@patternfly/react-core';
import { Foo } from '../Components/Foo';
import { Sample } from '../Components/Sample';
import { Test } from '../Components/Test';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const routes = [
    {
      component: Foo,
      exact: true,
      label: 'Foo',
      path: '/foo',
      title: 'Foo'
    },
    {
      component: Sample,
      exact: true,
      isAsync: true,
      label: 'Sample',
      path: '/sample',
      title: 'Sample'
    },
    {
        component: Test,
        exact: true,
        isAsync: true,
        label: 'Test',
        path: '/test',
        title: 'Test'
      }
];

const Data = () => {
  return (
    <PageSection>
      <Router>
        <Title headingLevel="h1" size="lg">Data</Title>
        <Button>Test</Button>
        <Button>Foo</Button>
        <Button>Sample</Button>

      </Router>

    </PageSection>
  )
}

export default Data;
