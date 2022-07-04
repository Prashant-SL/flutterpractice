const EventEmitter = require("events");

const event = new EventEmitter();

event.on("once", () => {
    console.log("Event once");
})
event.on("once", () => {
    console.log("Event twice");
})

event.emit("once")