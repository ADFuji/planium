// Get all events
const events = require("./events-arles.json").events.sort((a, b) => a.firstDate > b.firstDate ? 1 : -1);
// Get all tags from all events
const tags_arr = events.map((event) => event.tags);
const tags = new Map();
tags_arr.forEach((tag) => tag.forEach((tag) => tags.set(tag.id, tag.label)));
console.log(tags);
export default tags;
export { events };

function hasEvents(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const _date = new Date(year, month, day);
    return events.some((event) => {
        const firstDate = new Date(event.firstDate);
        const lastDate = new Date(event.lastDate);
        return _date >= firstDate && _date <= lastDate;
    });
}

export { hasEvents };

// index events to be able to search them by [day][month][year]
const index = {};

const events_all = new Map();

events.forEach((event) => {
    const firstDate = new Date(event.firstDate);
    const lastDate = new Date(event.lastDate);
    const _day = firstDate.getDate();
    const _month = firstDate.getMonth() + 1;
    const _year = firstDate.getFullYear();
    const __day = _day;
    const __month = _month;
    const __year = _year;
    if (!events_all.has(_year)) {
        events_all.set(_year, new Map());
    }
    if (!events_all.get(_year).has(_month)) {
        events_all.get(_year).set(_month, new Map());
    }
    if (!events_all.get(_year).get(_month).has(_day)) {
        events_all.get(_year).get(_month).set(_day, new Map());
    }
    events_all.get(_year).get(_month).get(_day).set(event.uid, event);
});
export { index };
export { events_all };