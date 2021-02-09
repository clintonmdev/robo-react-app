import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import './index.css';
import App from './containers/App'
import 'tachyons';
import { searchRobots, getRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';


const logger = createLogger();
const rootReducer = combineReducers({searchRobots, getRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();