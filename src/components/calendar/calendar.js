import React, { useCallback, memo } from 'react';
import { Page } from 'components';
import { compose } from 'redux';
import connectProps from './props';
import moment from 'moment';
import useStyles from './style';

const Calendar = ({ year, month, updateMonth }) => {
  const classes = useStyles();

  const currentDate = moment([year, month]).startOf('day');
  const nextDate = currentDate.add(1, 'month');

  const disabledDays = {
    before: new Date(2020, 6, 7),
    after: new Date(2020, 8, 22),
  };

  const handlePreviousMonth = useCallback(() => {
    updateMonth(-1);
  }, [updateMonth]);

  const handleNextMonth = useCallback(() => {
    updateMonth(1);
  }, [updateMonth]);

  return (
    <div className={classes.calendar}>
      <Page
        year={year}
        month={month}
        handlePreviousMonth={handlePreviousMonth}
        disabledDays={disabledDays}
      />
      <div className={classes.divider} />
      <Page
        year={nextDate.get('year')}
        month={nextDate.get('month')}
        handleNextMonth={handleNextMonth}
        disabledDays={disabledDays}
      />
    </div>
  );
};

export default compose(connectProps, memo)(Calendar);
