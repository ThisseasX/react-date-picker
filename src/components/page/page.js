import React, { memo } from 'react';
import { compose } from 'redux';
import connectProps from './props';
import { Day } from 'components';
import moment from 'moment';
import { flow, chunk, flatten } from 'lodash/fp';
import { daysOfWeek } from './content';
import { ReactComponent as Chevron } from 'assets/icons/chevron.svg';
import useStyles from './style';
import cn from 'clsx';

const Page = ({
  year,
  month,
  handlePreviousMonth,
  handleNextMonth,
  disabledDays,
  selectedDays,
  hoveredDay,
  selectDay,
  updateHoveredDay,
}) => {
  const classes = useStyles();

  const date = moment([year, month]);

  const headerDate = date.format('MMMM YYYY');
  const firstDayOfMonth = date.startOf('month').day();
  const daysInMonth = date.daysInMonth();

  const offsetDays = Array(firstDayOfMonth);
  const days = Array(daysInMonth)
    .fill()
    .map((_, i) => i + 1);

  const weeks = flow(flatten, chunk(7))([offsetDays, days]);

  const handleMouseLeave = () => {
    updateHoveredDay(undefined);
  };

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        {handlePreviousMonth && (
          <Chevron
            className={cn(classes.chevron, classes.chevronLeft)}
            onClick={handlePreviousMonth}
          />
        )}

        <div className={classes.headerDate}>{headerDate}</div>

        {handleNextMonth && (
          <Chevron
            className={cn(classes.chevron, classes.chevronRight)}
            onClick={handleNextMonth}
          />
        )}
      </div>

      <table className={classes.table}>
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <td key={day.name} className={classes.thDay}>
                {day.short}
              </td>
            ))}
          </tr>
        </thead>

        <tbody onMouseLeave={handleMouseLeave}>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, i) => (
                <Day
                  key={i}
                  year={year}
                  month={month}
                  day={day}
                  disabledDays={disabledDays}
                  selectedDays={selectedDays}
                  hoveredDay={hoveredDay}
                  selectDay={selectDay}
                  updateHoveredDay={updateHoveredDay}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default compose(connectProps, memo)(Page);
