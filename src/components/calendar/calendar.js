import React, { useCallback, memo } from 'react';
import { Page } from 'components';
import { compose } from 'redux';
import connectProps from './props';
import useStyles from './style';

const Calendar = ({ dates, updateMonth }) => {
  const classes = useStyles();

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
        date={dates[0]}
        handlePreviousMonth={handlePreviousMonth}
        disabledDays={disabledDays}
      />
      <div className={classes.divider} />
      <Page
        date={dates[1]}
        handleNextMonth={handleNextMonth}
        disabledDays={disabledDays}
      />
    </div>
  );
};

export default compose(connectProps, memo)(Calendar);
