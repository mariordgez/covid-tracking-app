import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countryReducer from './rockets/rockets';

const reducer = combineReducers({
  countries: countryReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
