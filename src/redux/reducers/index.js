import { combineReducers } from 'redux';

import filtersReducer from './pizzas';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default rootReducer;
