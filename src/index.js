import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/index.css';
import * as serviceWorker from './serviceWorker';

import App from '../src/Components/App';
import Firebase, { FirebaseContext } from '../src/Components/Authentication/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
