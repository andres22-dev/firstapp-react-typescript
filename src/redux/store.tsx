// import nameReducer from './nameTables.js';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
// import postReducer from './postReducer';

const composeEnhancers = compose;

const rootReducer = combineReducers({
  
});

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
