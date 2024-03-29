import React from 'react';
import { Provider } from 'react-redux';
import { Calendar } from 'components';
import { store } from 'store';
import useStyles from './style';

const disabledDays = {
  before: new Date(2023, 6, 7),
  after: new Date(2025, 1, 1),
};

const App = () => {
  useStyles();

  return (
    <Provider store={store}>
      <Calendar pages={2} startDate={new Date()} disabledDays={disabledDays} />
    </Provider>
  );
};

export default App;
