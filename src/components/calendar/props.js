import { connect } from 'react-redux';
import { combineSelectors } from 'store/utils';
import { dates } from 'store/calendar/selectors';
import { updateMonth } from 'store/calendar/actions';

const mapStateToProps = combineSelectors(dates);

const mapDispatchToProps = {
  updateMonth,
};

export default connect(mapStateToProps, mapDispatchToProps);
