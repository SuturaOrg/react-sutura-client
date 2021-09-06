import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { entity } from './entity.reducer';
import { stats } from './stats.reducer';
import {user} from "./user.reducer";
import {mail} from "./mail.reducer";




const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  entity,
  stats,
  user,
  mail
});

export default rootReducer;
