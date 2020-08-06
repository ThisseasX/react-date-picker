import { makeStyles } from '@material-ui/core/styles';
import { fontStyle } from 'style';

const styles = {
  page: {
    padding: '16px 16px 8px',
  },
  chevron: {
    width: 24,
    height: 24,
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
  day: {
    width: '32px',
    height: '32px',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  thDay: {
    ...fontStyle(14, 'dimgrey'),
  },
  tdDay: {
    ...fontStyle(14, 'black'),
  },
};

export default makeStyles(styles);
