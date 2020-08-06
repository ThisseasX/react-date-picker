import React, { useCallback, memo } from 'react';
import { Page } from 'components';
import useStyles from './style';

const Calendar = () => {
  const classes = useStyles();

  const disabledDays = {
    before: new Date(2020, 7, 4),
    after: new Date(2020, 7, 15),
  };

  const handlePreviousMonth = useCallback(() => {}, []);
  const handleNextMonth = useCallback(() => {}, []);

  return (
    <div className={classes.calendar}>
      <Page
        year={2020}
        month={7}
        handlePreviousMonth={handlePreviousMonth}
        disabledDays={disabledDays}
      />
      <div className={classes.divider} />
      <Page
        year={2020}
        month={8}
        handleNextMonth={handleNextMonth}
        disabledDays={disabledDays}
      />
    </div>
  );
};

export default memo(Calendar);
