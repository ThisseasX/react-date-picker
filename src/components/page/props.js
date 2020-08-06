import { connect } from 'react-redux';
import { combineSelectors } from 'store/utils';
import { selectedDays, hoveredDay } from 'store/calendar/selectors';
import { selectDay, updateHoveredDay } from 'store/calendar/actions';

const mapStateToProps = combineSelectors(selectedDays, hoveredDay);

const mapDispatchToProps = {
  selectDay,
  updateHoveredDay,
};

export default connect(mapStateToProps, mapDispatchToProps);
