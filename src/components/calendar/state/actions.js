import { createAction } from 'redux-actions';

const updateMonth = createAction('UPDATE_MONTH');
const selectDay = createAction('SELECT_DAY');
const updateHoveredDay = createAction('UPDATE_HOVER_DAY');

export { updateMonth, selectDay, updateHoveredDay };
