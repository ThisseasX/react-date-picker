const year = ({ calendar: { year } }) => ({ year });
const month = ({ calendar: { month } }) => ({ month });
const selectedDays = ({ calendar: { selectedDays } }) => ({ selectedDays });
const hoveredDay = ({ calendar: { hoveredDay } }) => ({ hoveredDay });

export { year, month, selectedDays, hoveredDay };
