import { makeStyles } from '@material-ui/core/styles';
import { fontStyle } from 'style';

const styles = {
  page: {
    padding: '16px 16px 8px',
    minWidth: '256px',
  },
  chevron: {
    width: 24,
    height: 24,
    cursor: 'pointer',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#3f51b5',
      fill: 'white',
    },
  },
  chevronLeft: {
    transform: 'rotate(90deg)',
  },
  chevronRight: {
    transform: 'rotate(-90deg)',
  },
  header: {
    display: 'flex',
    marginBottom: '8px',
  },
  headerDate: {
    ...fontStyle(16, 'dimgray', '500'),
    textAlign: 'center',
    flex: '1 1 auto',
  },
  table: {
    borderCollapse: 'collapse',
  },
  thDay: {
    ...fontStyle(14, 'dimgrey'),
    width: '32px',
    height: '32px',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'default',
  },
};

export default makeStyles(styles);
