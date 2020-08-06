import React from 'react';
import useStyles from './style';
import { Day } from 'components';
import moment from 'moment';
import { flow, chunk, flatten } from 'lodash/fp';
import { daysOfWeek } from './content';
import { ReactComponent as Chevron } from 'assets/icons/chevron.svg';
import cn from 'clsx';

const Page = ({ year, month, handlePreviousMonth, handleNextMonth }) => {
  const classes = useStyles();

  const date = moment().set({ year, month });

  const headerDate = date.format('MMMM YYYY');
  const firstDayOfMonth = date.startOf('month').day();
  const daysInMonth = date.daysInMonth();

  const offsetDays = Array(firstDayOfMonth);
  const days = Array(daysInMonth)
    .fill()
    .map((_, i) => i + 1);

  const weeks = flow(flatten, chunk(7))([offsetDays, days]);

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
              <td key={day.name} className={cn(classes.day, classes.thDay)}>
                {day.short}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, i) => (
                <td key={i} className={cn(classes.day, classes.tdDay)}>
                  {day && <Day day={day} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
