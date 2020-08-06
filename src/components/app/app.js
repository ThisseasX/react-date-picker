import React from 'react';
import { Provider } from 'react-redux';
import { Calendar } from 'components';
import { store } from 'store';
import useStyles from './style';

const App = () => {
  useStyles();

  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
};

export default App;
