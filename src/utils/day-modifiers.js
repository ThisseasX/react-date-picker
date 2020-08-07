import moment from 'moment';
import { areDaysEqual } from 'utils';
import { flow, sortBy, compact, identity, findIndex } from 'lodash/fp';

const isToday = (year, month, day) => {
  const thisDay = moment([year, month, day]).startOf('day');
  const today = moment().startOf('day');

  const isToday = areDaysEqual(thisDay, today);

  return isToday;
};

const isDisabled = (year, month, day, disabledDays) => {
  const thisDay = moment([year, month, day]).startOf('day');
  const { before, after } = disabledDays;

  const isBefore = before && thisDay.isBefore(moment(before).startOf('day'));
  const isAfter = after && thisDay.isAfter(moment(after).startOf('day'));

  return isBefore || isAfter;
};

const isSelectedMoment = (momentDate, selectedDays) => {
  const thisDay = moment(momentDate).startOf('day');

  const isSelected = selectedDays.some(day => {
    return areDaysEqual(day, thisDay);
  });

  return isSelected;
};

const isSelected = (year, month, day, selectedDays) => {
  return isSelectedMoment([year, month, day], selectedDays);
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

const getPosition = (year, month, day, selectedDays, hoveredDay) => {
  const thisDay = moment([year, month, day]).startOf('day');

  if (selectedDays.some(areDaysEqual(hoveredDay))) {
    return;
  }

  const days = flow(
    compact,
    sortBy(identity),
  )([selectedDays[0], selectedDays[1] || hoveredDay]);

  if (days.length !== 2) {
    return;
  }

  const index = findIndex(areDaysEqual(thisDay), days);

  const position = index === 0 ? 'start' : index === 1 ? 'end' : undefined;

  return position;
};

export {
  isToday,
  isDisabled,
  isSelected,
  isSelectedMoment,
  isBetween,
  getPosition,
};
