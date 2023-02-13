// Get all events
const events = require("./events-arles.json").events;
// Get all tags from all events
const tags_arr = events.map((event) => event.tags);
let tags = [];
tags_arr.forEach((tag) => tag.forEach((tag) => tags.push(tag.label)));
tags = tags.filter((tag, index) => tags.indexOf(tag) === index);

export default tags;