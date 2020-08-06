import moment from 'moment';
import { flow, sortBy, compact, identity } from 'lodash/fp';

const isToday = (year, month, day) => {
  const thisDay = moment([year, month, day]).startOf('day');
  const today = moment().startOf('day');

  const isToday = thisDay.diff(today, 'days') === 0;

  return isToday;
};

const isDisabled = (year, month, day, before, after) => {
  const thisDay = moment([year, month, day]).startOf('day');

  const isBefore = before && thisDay.isBefore(moment(before).startOf('day'));
  const isAfter = after && thisDay.isAfter(moment(after).startOf('day'));

  return isBefore || isAfter;
};

const isSelected = (year, month, day, selectedDays) => {
  const thisDay = moment([year, month, day]).startOf('day');

  const isSelected = selectedDays.some(day => {
    const selectedDay = moment(day).startOf('day');
    return selectedDay.diff(thisDay, 'days') === 0;
  });

  return isSelected;
};

const isBetween = (year, month, day, selectedDays, hoveredDay) => {
  const days = flow(
    compact,
    sortBy(identity),
  )([selectedDays[0], selectedDays[1] || hoveredDay]);

  if (days.length !== 2) return false;

  const thisDay = moment([year, month, day]).startOf('day');
  const dayStart = moment(days[0]).startOf('day');
  const dayEnd = moment(days[1]).startOf('day');

  const isBetween = thisDay.isBetween(dayStart, dayEnd);

  return isBetween;
};

export { isToday, isDisabled, isSelected, isBetween };
