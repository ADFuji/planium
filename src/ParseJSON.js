/*

    FICHIER POUR TRAITER LE JSON

*/

const events = require("./events-arles.json").events.sort((a, b) => a.firstDate > b.firstDate ? 1 : -1);
// Get all tags from all events
const tags_arr = events.map((event) => event.tags);
const tags = new Map();
tags_arr.forEach((tag) => tag.forEach((tag) => tags.set(tag.id, tag.label)));
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

const events_all = new Map();

// Create a map of events
events.forEach((event) => {
    const firstDate = new Date(event.firstDate);
    const _day = firstDate.getDate();
    const _month = firstDate.getMonth() + 1;
    const _year = firstDate.getFullYear();
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

// Get events from a date
function getEvents(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let ret = [];
    for (let y = year; y < year + 2; y++) {
        if (!events_all.has(y)) continue;
        for (let m = 1; m < 13; m++) {
            if (!events_all.get(y).has(m) || (y === year && m < month)) continue;
            for (let d = 1; d < 32; d++) {
                if (!events_all.get(y).get(m).has(d) || (y === year && m === month && d < day)) continue;
                events_all.get(y).get(m).get(d).forEach((event) => {
                    ret.push(event);
                });
            }
        }
    }
    return ret;
}

// Sort events with tags
function sortWithTags(events, tags) {
    let ret = [];
    if (tags.length === 0) return events;
    events.forEach((event) => {
        const _tags = event.tags;
        _tags.forEach((tag) => {
            if (tags.includes(tag.label)) {
                ret.push(event);
            }
        });
    })
    return ret;
}

export { events_all };
export { getEvents, sortWithTags };