import { createStore, combineReducers, applyMiddleware } from 'redux';
import { UserReducers } from './Reducers/User';
import { RecipeReducer } from './Reducers/Recipe';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    user: UserReducers,
    recipe: RecipeReducer,
  }),
  applyMiddleware(thunk)
);
