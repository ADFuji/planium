// Get all events
const events = require("./events-arles-small.json").events.sort((a, b) => a.firstDate > b.firstDate ? 1 : -1);
console.log(events);
// Get all tags from all events
const tags_arr = events.map((event) => event.tags);
let tags = [];
tags_arr.forEach((tag) => tag.forEach((tag) => tags.push(tag.label)));
tags = tags.filter((tag, index) => tags.indexOf(tag) === index);

export default tags;
export { events };

function hasEvents(date) {
    /*
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(day, month, year);
    console.log(date);
    const _date = year + "-" + month + "-" + day;
    console.log(events.some((event) => event.firstDate >= _date && event.lastDate <= _date));
    return events.some((event) => event.firstDate >= _date && event.lastDate <= _date);
    */
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const _date = new Date(year, month, day);
    console.log(_date);
    return events.some((event) => {
        const firstDate = new Date(event.firstDate);
        const lastDate = new Date(event.lastDate);
        return _date >= firstDate && _date <= lastDate;
    });
}

export { hasEvents };