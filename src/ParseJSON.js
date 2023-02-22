// Get all events
const events = require("./events-arles.json").events;
// Get all tags from all events
const tags_arr = events.map((event) => event.tags);
let tags = [];
tags_arr.forEach((tag) => tag.forEach((tag) => tags.push(tag.label)));
tags = tags.filter((tag, index) => tags.indexOf(tag) === index);

export default tags;
export { events };

function hasEvents(date)
{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const _date = year + "-" + month + "-" + day;
    return events.some((event) => event.firstDate >= _date && event.lastDate <= _date);
}

export { hasEvents };