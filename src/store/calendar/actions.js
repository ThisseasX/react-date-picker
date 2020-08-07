import { createAction } from 'redux-actions';

const updateMonth = createAction('UPDATE_MONTH');
const selectDay = createAction('SELECT_DAY');
const updateHoveredDay = createAction('UPDATE_HOVERED_DAY');
const updatePages = createAction('UPDATE_PAGES');
const updateStartDate = createAction('UPDATE_START_DATE');
const updateDisabledDays = createAction('UPDATE_DISABLED_DAYS');

export {
  updateMonth,
  selectDay,
  updateHoveredDay,
  updatePages,
  updateStartDate,
  updateDisabledDays,
};
