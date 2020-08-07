import React from 'react';
import connectProps from './props';
import { Day } from 'components';
import { daysOfWeek } from './content';
import { ReactComponent as Chevron } from 'assets/icons/chevron.svg';
import useStyles from './style';
import cn from 'clsx';

const Page = ({
  // Props
  date,
  handlePreviousMonth,
  handleNextMonth,

  // Connected
  selectedDays,
  disabledDays,
  hoveredDay,

  // Actions
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
                  // Core
                  year={date.year}
                  month={date.month}
                  day={day}
                  selectedDays={selectedDays}
                  disabledDays={disabledDays}
                  hoveredDay={hoveredDay}
                  // Actions
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

export default connectProps(Page);
