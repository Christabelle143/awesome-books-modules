import { DateTime } from './luxon.js';

const dateTag = document.querySelector('.date');
const datetime = DateTime.now().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
dateTag.innerHTML = datetime;
export default datetime;
