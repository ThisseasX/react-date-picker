import React, { memo } from 'react';
import { compose } from 'redux';
import connectProps from './props';
import { Day } from 'components';
import { daysOfWeek } from './content';
import { ReactComponent as Chevron } from 'assets/icons/chevron.svg';
import useStyles from './style';
import cn from 'clsx';

const Page = ({
  date,
  handlePreviousMonth,
  handleNextMonth,
  disabledDays,
  selectedDays,
  hoveredDay,
  selectDay,
  updateHoveredDay,
}) => {
  const classes = useStyles();

  const handleMouseLeave = () => {
    if (selectedDays.length === 1) {
      updateHoveredDay(undefined);
    }
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

        <div className={classes.headerDate}>{date.header}</div>

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
          {date.weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, i) => (
                <Day
                  key={i}
                  year={date.year}
                  month={date.month}
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
