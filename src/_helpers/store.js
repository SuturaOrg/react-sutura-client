import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const getMiddleware = () => {
    console.log("hgfk",process.env);
    if (process.env.NODE_ENV === 'production') {
      return applyMiddleware(thunkMiddleware);
    } else {
      return applyMiddleware(thunkMiddleware, createLogger())
    }
  };
export const store = createStore(
    rootReducer,
   getMiddleware()
);
