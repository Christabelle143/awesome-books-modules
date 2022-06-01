import { DateTime } from './luxon.js';  
const dateTag = document.querySelector('.date');
const date = DateTime.now().toFormat('LLL dd yyyy, hh:mm:ss a');
dateTag.innerHTML = date;
export default date;