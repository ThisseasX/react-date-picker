import { connect } from 'react-redux';
import { combineSelectors } from 'store/utils';
import { selectedDays, hoveredDay } from 'components/calendar/state/selectors';
import { selectDay, updateHoveredDay } from 'components/calendar/state/actions';

const mapStateToProps = combineSelectors(selectedDays, hoveredDay);

const mapDispatchToProps = {
  selectDay,
  updateHoveredDay,
};

export default connect(mapStateToProps, mapDispatchToProps);
