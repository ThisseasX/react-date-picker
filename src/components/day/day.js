import React, { memo } from 'react';
import useStyles from './style';
import moment from 'moment';
import { isToday, isDisabled, isSelected, isBetween } from './utils';
import cn from 'clsx';

const Day = ({
  year,
  month,
  day,
  disabledDays = {},
  selectedDays,
  hoveredDay,
  selectDay,
  updateHoveredDay,
}) => {
  const classes = useStyles();

  const { before, after } = disabledDays;

  const handleDayClick = () => {
    selectDay(moment([year, month, day]).startOf('day'));
  };

  const handleDayHover = () => {
    if (selectedDays.length === 1) {
      updateHoveredDay(moment([year, month, day]).startOf('day'));
    }
  };

  return (
    <td
      className={cn(classes.day, {
        [classes.today]: isToday(year, month, day),
        [classes.disabled]: isDisabled(year, month, day, before, after),
        [classes.noHover]: !day || isDisabled(year, month, day, before, after),
        [classes.selected]: isSelected(year, month, day, selectedDays),
        [classes.between]: isBetween(year, month, day, selectedDays, hoveredDay),
      })}
      onClick={handleDayClick}
      onMouseOver={handleDayHover}
    >
      {day}
    </td>
  );
};

export default memo(Day);
