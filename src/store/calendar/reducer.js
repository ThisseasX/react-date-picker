import { handleActions } from 'redux-actions';

import {
  updateMonth,
  selectDay,
  updateHoveredDay,
  updatePages,
  updateStartDate,
  updateDisabledDays,
} from './actions';

import { reject } from 'lodash/fp';
import { areDaysEqual, isSelectedMoment, generateDates } from 'utils';
import moment from 'moment';

const initialState = {
  pages: 2,
  startDate: new Date(),
  dates: [],
  selectedDays: [],
  disabledDays: {
    before: undefined,
    after: undefined,
  },
  hoveredDay: undefined,
};

const calendarReducer = handleActions(
  {
    [selectDay]: (state, { payload }) => {
      const selectedDay = payload;

      if (
        state.selectedDays.length > 0 &&
        isSelectedMoment(selectedDay, state.selectedDays)
      ) {
        return {
          ...state,
          selectedDays: reject(areDaysEqual(selectedDay), state.selectedDays),
          hoveredDay: selectedDay,
        };
      } else if (state.selectedDays.length === 2) {
        return {
          ...state,
          selectedDays: [selectedDay],
          hoveredDay: undefined,
        };
      } else {
        return {
          ...state,
          selectedDays: [...state.selectedDays, selectedDay].sort(
            (a, b) => a - b,
          ),
          hoveredDay: undefined,
        };
      }
    },
    [updateHoveredDay]: (state, { payload }) => ({
      ...state,
      hoveredDay: payload,
    }),
    [updateMonth]: (state, { payload }) => {
      const month = payload;
      const thisDate = moment(state.startDate).startOf('day');
      const targetDate = thisDate.add(month, 'month');

      return {
        ...state,
        startDate: targetDate.toDate(),
        dates: generateDates(targetDate, state.pages),
      };
    },
    [updatePages]: (state, { payload }) => {
      const pages = payload;
      const thisDate = moment(state.startDate).startOf('day');

      return {
        ...state,
        pages,
        dates: generateDates(thisDate, pages),
      };
    },
    [updateStartDate]: (state, { payload }) => {
      const startDate = payload;

      if (areDaysEqual(startDate, state.startDate)) {
        return state;
      }

      const thisDate = moment(startDate).startOf('day');

      return {
        ...state,
        startDate,
        dates: generateDates(thisDate, state.pages),
      };
    },
    [updateDisabledDays]: (state, { payload = {} }) => {
      const { before, after } = payload;

      return {
        ...state,
        disabledDays: {
          ...state.disabledDays,
          before,
          after,
        },
      };
    },
  },
  initialState,
);

export { calendarReducer };
