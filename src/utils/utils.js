import moment from 'moment';
import { flow, flatten, chunk, curryN } from 'lodash/fp';

const areDaysEqual = curryN(2, (day1, day2) => {
  const momentDay1 = moment(day1).startOf('day');
  const momentDay2 = moment(day2).startOf('day');

  const isSameDay = momentDay1.diff(momentDay2, 'days') === 0;

  return isSameDay;
});

const isSelectedDay = (selectedDays, day) => {
  const isSelected = selectedDays.some(selectedDay =>
    areDaysEqual(day, selectedDay),
  );

  return isSelected;
};

const getYearAndMonth = (momentDate, offsetMonths = 0) => {
  const date = moment(momentDate).add(offsetMonths, 'months');

  return {
    year: date.get('year'),
    month: date.get('month'),
  };
};

const getWeeks = (momentDate, offsetMonths = 0) => {
  const date = moment(momentDate).add(offsetMonths, 'months');

  const firstDayOfMonth = date.startOf('month').day();
  const daysInMonth = date.daysInMonth();

  const offsetDays = Array(firstDayOfMonth);
  const days = Array(daysInMonth)
    .fill()
    .map((_, i) => i + 1);

  const weeks = flow(flatten, chunk(7))([offsetDays, days]);

  return weeks;
};

const getHeader = (momentDate, offsetMonths = 0) => {
  const date = moment(momentDate).add(offsetMonths, 'months');
  const header = date.format('MMMM YYYY');

  return header;
};

const generateDates = (momentDate, pages) =>
  Array(pages)
    .fill()
    .map((_, i) => ({
      ...getYearAndMonth(momentDate, i),
      weeks: getWeeks(momentDate, i),
      header: getHeader(momentDate, i),
    }));

export {
  areDaysEqual,
  isSelectedDay,
  getYearAndMonth,
  getWeeks,
  getHeader,
  generateDates,
};
