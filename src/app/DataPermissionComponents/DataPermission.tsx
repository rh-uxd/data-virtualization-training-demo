import * as React from 'react';
import { DataPermissionDataToolbar } from './DataPermissionDataToolbar';
import { DataPermissionTable } from './DataPermissionTable';

const DataPermission = () => {
  return (
    <React.Fragment>
      <DataPermissionDataToolbar/>
      <DataPermissionTable/>
    </React.Fragment>
  )
};

export { DataPermission };
