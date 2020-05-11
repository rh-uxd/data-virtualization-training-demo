import { Foo } from '../Components/Foo';
import { Sample } from '../Components/Sample';
import { Test } from '../Components/Test';

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