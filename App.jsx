import React from 'react';
import { PermissionsProvider } from './context/PermissionsProvider';
import { ImageOperationProvider } from './context/ImageOperationProvider';

import Navigations from './navigations/index';

const App = () => {
  return (
    <PermissionsProvider>
      <ImageOperationProvider>
        <Navigations />
      </ImageOperationProvider>
    </PermissionsProvider>
  );
};

export default App;
