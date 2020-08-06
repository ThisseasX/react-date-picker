import { handleActions } from 'redux-actions';
import { updateMonth, selectDay, updateHoveredDay } from './actions';
import { reject } from 'lodash/fp';
import moment from 'moment';

const today = moment().startOf('day');
const year = today.get('year');
const month = today.get('month');

const initialState = {
  year,
  month,
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
    [updateHoveredDay]: (state, { payload }) => ({
      ...state,
      hoveredDay: payload,
    }),
    [updateMonth]: (state, { payload }) => {
      const thisDate = moment([state.year, state.month]).startOf('day');
      const targetDate = thisDate.add(payload, 'month');

      const year = targetDate.get('year');
      const month = targetDate.get('month');

      console.log({
        thisDate: thisDate.format('dddd MMMM YYYY'),
        targetDate: targetDate.format('dddd MMMM YYYY'),
        year,
        month,
      });

      return {
        ...state,
        year,
        month,
      };
    },
  },
  initialState,
);

export { calendarReducer };
