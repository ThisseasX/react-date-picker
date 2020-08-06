import moment from 'moment';
import { flow, flatten, chunk } from 'lodash/fp';

const getYearAndMonth = (year, month, offsetMonths = 0) => {
  const date = moment([year, month]).startOf('day').add(offsetMonths, 'months');

  return {
    year: date.get('year'),
    month: date.get('month'),
  };
};

const getWeeks = (year, month, offsetMonths = 0) => {
  const date = moment([year, month]).startOf('day').add(offsetMonths, 'months');

  const firstDayOfMonth = date.startOf('month').day();
  const daysInMonth = date.daysInMonth();

  const offsetDays = Array(firstDayOfMonth);
  const days = Array(daysInMonth)
    .fill()
    .map((_, i) => i + 1);

  const weeks = flow(flatten, chunk(7))([offsetDays, days]);

  return weeks;
};

const getHeader = (year, month, offsetMonths = 0) => {
  const date = moment([year, month]).startOf('day').add(offsetMonths, 'months');
  const header = date.format('MMMM YYYY');

  return header;
};

export { getYearAndMonth, getWeeks, getHeader };
