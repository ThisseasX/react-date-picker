import { createAction } from 'redux-actions';

const selectDay = createAction('SELECT_DAY');
const updateHoverDay = createAction('UPDATE_HOVER_DAY');

export { selectDay, updateHoverDay };
