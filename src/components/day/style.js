import { makeStyles } from '@material-ui/core/styles';
import { fontStyle } from 'style';

const styles = {
  day: {
    ...fontStyle(14, 'black'),
    width: '32px',
    height: '32px',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    '&::before': {
      zIndex: -1,
      content: '""',
      position: 'absolute',
      left: 0,
      top: 2,
      right: 0,
      bottom: 2,
    },
    '&:hover': {
      color: 'white',
      '&::before': {
        backgroundColor: '#3f51b5',
      },
    },
  },
  start: {
    '&::before': {
      borderRadius: '16px 0 0 16px',
    },
  },
  end: {
    '&::before': {
      borderRadius: '0 16px 16px 0',
    },
  },
  today: {
    color: 'red',
  },
  disabled: {
    opacity: 0.2,
  },
  noHover: {
    pointerEvents: 'none',
  },
  selected: {
    color: 'white',
    '&::before': {
      backgroundColor: '#3f51b5',
    },
  },
  between: {
    '&::before': {
      backgroundColor: '#e8eaf6',
    },
  },
};

export default makeStyles(styles);
