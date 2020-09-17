import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';


ReactDOM.render(

  <BrowserRouter>
    <React.StrictMode>
      <Paper elevation={0}  style={{height : '100%', position : 'relative', top : 0, left : 0, bottom : 0, right : 0, margin : 0}}>
        <App />
      </Paper>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
