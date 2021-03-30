import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './users';

const composeEnhancers = compose;

const rootReducer = combineReducers({

  dataUsers: userReducer
  
});

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
