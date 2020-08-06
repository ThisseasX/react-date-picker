import { connect } from 'react-redux';
import { combineSelectors } from 'store/utils';
import { year, month } from 'components/calendar/state/selectors';
import { updateMonth } from 'components/calendar/state/actions';

const mapStateToProps = combineSelectors(year, month);

const mapDispatchToProps = {
  updateMonth,
};

export default connect(mapStateToProps, mapDispatchToProps);
