import React from 'react';
import { PermissionsProvider } from './context/PermissionsProvider';
import Navigations from './navigations/index';

const App = () => {
  return (
    <PermissionsProvider>
      <Navigations />
    </PermissionsProvider>
  );
};

export default App;
