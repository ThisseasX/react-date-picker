const year = ({ calendar: { year } }) => ({ year });
const month = ({ calendar: { month } }) => ({ month });
const weeks = ({ calendar: { weeks } }) => ({ weeks });
const selectedDays = ({ calendar: { selectedDays } }) => ({ selectedDays });
const hoveredDay = ({ calendar: { hoveredDay } }) => ({ hoveredDay });
const dates = ({ calendar: { dates } }) => ({ dates });

export { year, month, weeks, selectedDays, hoveredDay, dates };
