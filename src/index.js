import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render(
  <Container>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Container>,
  document.querySelector('#root')
);
