import React, { useEffect, useCallback, memo } from 'react';
import { Page } from 'components';
import { compose } from 'redux';
import connectProps from './props';
import useStyles from './style';

const Calendar = ({
  pages,
  startDate = new Date(),
  disabledDays,
  dates = [],
  updateMonth,
  updatePages,
  updateStartDate,
}) => {
  const classes = useStyles();

  useEffect(() => {
    updatePages(pages);
    updateStartDate(startDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePages, updateStartDate]);

  const handlePreviousMonth = useCallback(() => {
    updateMonth(-1);
  }, [updateMonth]);

  const handleNextMonth = useCallback(() => {
    updateMonth(1);
  }, [updateMonth]);

  return (
    <div className={classes.calendar}>
      {dates.map((date, i, arr) => (
        <React.Fragment key={i}>
          {i > 0 && <div className={classes.divider} />}
          <Page
            date={date}
            handlePreviousMonth={i === 0 ? handlePreviousMonth : undefined}
            handleNextMonth={i === arr.length - 1 ? handleNextMonth : undefined}
            disabledDays={disabledDays}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default compose(connectProps, memo)(Calendar);
