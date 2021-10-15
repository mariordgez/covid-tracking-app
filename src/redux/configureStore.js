import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from './countries/countries';

const reducer = combineReducers({
  countries: countryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
