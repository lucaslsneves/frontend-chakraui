import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
    <ChakraProvider>
      <Router  >
        <Routes />
      </Router  >
    </ChakraProvider>
  ,
  document.getElementById('root')
);


