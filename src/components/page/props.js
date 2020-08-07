import { connect } from 'react-redux';
import { combineSelectors } from 'store/utils';

import {
  selectedDays,
  disabledDays,
  hoveredDay,
} from 'store/calendar/selectors';

import { selectDay, updateHoveredDay } from 'store/calendar/actions';

const mapStateToProps = combineSelectors(
  selectedDays,
  disabledDays,
  hoveredDay,
);

const mapDispatchToProps = {
  selectDay,
  updateHoveredDay,
};

export default connect(mapStateToProps, mapDispatchToProps);
