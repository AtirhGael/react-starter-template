import { combineReducers } from 'redux';
import ExampleReducer from '../user/reducer';

const reducerCombination = combineReducers({
  ExampleReducer,
});

export default reducerCombination;

