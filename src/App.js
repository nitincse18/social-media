// Import necessary dependencies
import React from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './components/Body';
import { Toaster } from 'react-hot-toast';

// App component
const App = () => {
  return (
    <Provider store={appStore} > 
      <Body />
      <Toaster position='top-center'/>
    </Provider>
  );
};

export default App;
