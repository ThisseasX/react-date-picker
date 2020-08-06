import { handleActions } from 'redux-actions';
import { selectDay, updateHoverDay } from './actions';
import { reject } from 'lodash/fp';
import moment from 'moment';

const initialState = {
  selectedDays: [],
  hoveredDay: undefined,
};

const compareDays = day1 => day2 => {
  const momentDay1 = moment(day1).startOf('day');
  const momentDay2 = moment(day2).startOf('day');

  const isSameDay = momentDay1.diff(momentDay2, 'days') === 0;

  return isSameDay;
};

const isSelectedDay = (selectedDays, day) => {
  const isSelected = selectedDays.some(selectedDay =>
    compareDays(day)(selectedDay),
  );

  return isSelected;
};

const calendarReducer = handleActions(
  {
    [selectDay]: (state, { payload }) => {
      if (
        state.selectedDays.length > 0 &&
        isSelectedDay(state.selectedDays, payload)
      ) {
        return {
          ...state,
          selectedDays: reject(compareDays(payload), state.selectedDays),
          hoveredDay: undefined,
        };
      } else if (state.selectedDays.length === 2) {
        return {
          ...state,
          selectedDays: [payload],
          hoveredDay: undefined,
        };
      } else {
        return {
          ...state,
          selectedDays: [...state.selectedDays, payload].sort((a, b) => a - b),
          hoveredDay: undefined,
        };
      }
    },
    [updateHoverDay]: (state, { payload }) => ({
      ...state,
      hoveredDay: payload,
    }),
  },
  initialState,
);

export { calendarReducer };
