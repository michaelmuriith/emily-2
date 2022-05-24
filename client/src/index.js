import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import client from './apolloclient';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
