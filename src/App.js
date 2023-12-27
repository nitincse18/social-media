// Import necessary dependencies
import React from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './components/Body';

// App component
const App = () => {
  return (
    <Provider store={appStore} > 
      <Body />
    </Provider>
  );
};

export default App;
