import { makeStyles } from '@material-ui/core/styles';

const styles = {
  calendar: {
    display: 'flex',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.38)',
    borderRadius: '4px',
    minHeight: '280px',
  },
  divider: {
    width: '1px',
    backgroundColor: '#e8e8e8',
  },
};

export default makeStyles(styles);
