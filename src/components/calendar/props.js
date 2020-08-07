import { connect } from 'react-redux';
import { combineSelectors } from 'store/utils';
import { dates } from 'store/calendar/selectors';

import {
  updateMonth,
  updatePages,
  updateStartDate,
  updateDisabledDays,
} from 'store/calendar/actions';

const mapStateToProps = combineSelectors(dates);

const mapDispatchToProps = {
  updateMonth,
  updatePages,
  updateStartDate,
  updateDisabledDays,
};

export default connect(mapStateToProps, mapDispatchToProps);
