import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/index.css';
import * as serviceWorker from './serviceWorker';

import App from '../src/Components/App';
import Firebase, {
  FirebaseContext,
} from '../src/Components/Authentication/Firebase';

import { IconContext } from 'react-icons';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <IconContext.Provider
      value={{ color: 'white', className: 'global-class-name', size: '2em' }}
    >
      <App />
    </IconContext.Provider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
