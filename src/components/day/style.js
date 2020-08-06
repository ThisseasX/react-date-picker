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
    '&:hover': {
      backgroundColor: '#3f51b5',
      color: 'white',
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
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  between: {
    backgroundColor: '#e8eaf6',
  },
};

export default makeStyles(styles);
