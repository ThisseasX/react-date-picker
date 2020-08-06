import { makeStyles } from '@material-ui/core/styles';
import { fontStyle } from 'style';

const styles = {
  '@global': {
    html: {
      ...fontStyle(14),
      boxSizing: 'border-box',
    },
    [['html', 'body', '#root']]: {
      height: '100%',
      margin: 0,
    },
    '#root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [['*', '*::before', '*::after']]: {
      boxSizing: 'inherit',
    },
  },
};

export default makeStyles(styles);
