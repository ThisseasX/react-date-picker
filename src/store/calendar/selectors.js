const pages = ({ calendar: { pages } }) => ({ pages });
const startDate = ({ calendar: { startDate } }) => ({ startDate });
const dates = ({ calendar: { dates } }) => ({ dates });
const selectedDays = ({ calendar: { selectedDays } }) => ({ selectedDays });
const disabledDays = ({ calendar: { disabledDays } }) => ({ disabledDays });
const hoveredDay = ({ calendar: { hoveredDay } }) => ({ hoveredDay });

export { pages, startDate, dates, selectedDays, disabledDays, hoveredDay };
