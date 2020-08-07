import moment from 'moment';

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

export { compareDays, isSelectedDay };
