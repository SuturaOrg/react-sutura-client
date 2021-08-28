import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { contribution } from './contribution.reducer';


const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  contribution
});

export default rootReducer;
