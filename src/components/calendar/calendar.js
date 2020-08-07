import React, { useEffect, useCallback } from 'react';
import { Page } from 'components';
import connectProps from './props';
import useStyles from './style';

const Calendar = ({
  // Props
  pages = 2,
  startDate = new Date(),
  disabledDays = {},

  // Connected
  dates = [],

  // Actions
  updateMonth,
  updatePages,
  updateStartDate,
  updateDisabledDays,
}) => {
  const classes = useStyles();

  // Effects
  useEffect(() => {
    updatePages(pages);
  }, [pages, updatePages]);

  useEffect(() => {
    updateStartDate(startDate);
  }, [startDate, updateStartDate]);

  useEffect(() => {
    updateDisabledDays(disabledDays);
  }, [disabledDays, updateDisabledDays]);

  // Callbacks
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
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default connectProps(Calendar);
