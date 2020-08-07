const startDate = ({ calendar: { startDate } }) => ({ startDate });
const pages = ({ calendar: { pages } }) => ({ pages });
const dates = ({ calendar: { dates } }) => ({ dates });
const selectedDays = ({ calendar: { selectedDays } }) => ({ selectedDays });
const hoveredDay = ({ calendar: { hoveredDay } }) => ({ hoveredDay });

export { startDate, pages, selectedDays, hoveredDay, dates };
