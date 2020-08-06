import { combineReducers } from 'redux';
import { calendarReducer } from 'components/calendar/state/reducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export { rootReducer };
