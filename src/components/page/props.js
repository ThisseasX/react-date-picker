import { connect } from 'react-redux';
import { combineSelectors } from 'store/utils';
import { selectedDays, hoveredDay } from 'components/calendar/state/selectors';
import { selectDay, updateHoverDay } from 'components/calendar/state/actions';

const mapStateToProps = combineSelectors(selectedDays, hoveredDay);

const mapDispatchToProps = {
  selectDay,
  updateHoverDay,
};

export default connect(mapStateToProps, mapDispatchToProps);
