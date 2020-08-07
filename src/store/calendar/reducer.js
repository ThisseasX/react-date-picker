import { handleActions } from 'redux-actions';
import {
  updateMonth,
  selectDay,
  updateHoveredDay,
  updatePages,
  updateStartDate,
} from './actions';
import { reject } from 'lodash/fp';
import { areDaysEqual, isSelectedDay, generateDates } from 'utils';
import moment from 'moment';

const initialState = {
  pages: 2,
  startDate: new Date(),
  dates: [],
  selectedDays: [],
  hoveredDay: undefined,
};

const calendarReducer = handleActions(
  {
    [selectDay]: (state, { payload }) => {
      const selectedDay = payload;

      if (
        state.selectedDays.length > 0 &&
        isSelectedDay(state.selectedDays, selectedDay)
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
  },
  initialState,
);

export { calendarReducer };
