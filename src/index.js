import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import DataContextProvider from './context/context'

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
  ,

  document.getElementById('root')
);
