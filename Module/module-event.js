const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class started");

    // raise an event
    setTimeout(() => {
      this.emit("bellRing", {
        period: "First",
        text: "is ended",
      });
    }, 1000);
  }
}

module.exports = School;
