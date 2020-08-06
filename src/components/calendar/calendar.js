import React from 'react';
import { Page } from 'components';
import useStyles from './style';

const Calendar = () => {
  const classes = useStyles();

  return (
    <div className={classes.calendar}>
      <Page year={2020} month={7} handlePreviousMonth={1} />
      <Page year={2020} month={8} handleNextMonth={1} />
    </div>
  );
};

export default Calendar;
