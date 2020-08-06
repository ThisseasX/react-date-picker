import { makeStyles } from '@material-ui/core/styles';

const styles = {
  calendar: {
    display: 'flex',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.38)',
    borderRadius: '4px',
    position: 'relative',
  },
  divider: {
    width: '1px',
    height: '100%',
    backgroundColor: '#e8e8e8',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

export default makeStyles(styles);
