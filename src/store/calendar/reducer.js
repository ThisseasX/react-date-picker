import { handleActions } from 'redux-actions';
import { updateMonth, selectDay, updateHoveredDay } from './actions';
import { reject } from 'lodash/fp';
import { getYearAndMonth, getWeeks, getHeader } from 'utils';
import { compareDays, isSelectedDay } from './utils';
import moment from 'moment';

const today = moment().startOf('day');
const year = today.get('year');
const month = today.get('month');

const initialState = {
  dates: [
    {
      ...getYearAndMonth(year, month),
      weeks: getWeeks(year, month),
      header: getHeader(year, month),
    },
    {
      ...getYearAndMonth(year, month, 1),
      weeks: getWeeks(year, month, 1),
      header: getHeader(year, month, 1),
    },
  ],
  selectedDays: [],
  hoveredDay: undefined,
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
          hoveredDay: payload,
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
      const thisDate = moment([
        state.dates[0].year,
        state.dates[0].month,
      ]).startOf('day');

      const targetDate = thisDate.add(payload, 'month');

      const year = targetDate.get('year');
      const month = targetDate.get('month');

      return {
        ...state,
        dates: [
          {
            ...getYearAndMonth(year, month),
            weeks: getWeeks(year, month),
            header: getHeader(year, month),
          },
          {
            ...getYearAndMonth(year, month, 1),
            weeks: getWeeks(year, month, 1),
            header: getHeader(year, month, 1),
          },
        ],
      };
    },
  },
  initialState,
);

export { calendarReducer };
