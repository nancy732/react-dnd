import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { observe } from './scheduler/observe'
import App from './App'
import * as serviceWorker from './serviceWorker';
import Board from './scheduler/board'

observe(position => ReactDOM.render(<Board position={position} />, document.getElementById('root')))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
