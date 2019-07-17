import { combineReducers } from 'redux';
import selectedAlcoholReducer from './selected-alcohol-reducer';
import alcoholListReducer from './alcohol-list-reducer';

const rootReducer = combineReducers({
  selectedAlcohol: selectedAlcoholReducer,
  alcoholList: alcoholListReducer
});

export default rootReducer;
