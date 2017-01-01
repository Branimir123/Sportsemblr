module.exports = function (models) {
    const {
        Event
    } = models;

    return {
        findEventById(id) {
            return new Promise((resolve, reject) => {
                Event.findById(id, (err, ev) => {
                    if (err) {
                        reject(err);
                    }

                    let currentDate = new Date();
                    if (ev.date < currentDate) {
                        ev.isFinished = true;
                        ev.save();
                    }

                    resolve(ev);
                })
            });
        },
        findEventsForSport(sport) {
            return new Promise((resolve, reject) => {
                Event.find({
                    sport: sport
                }, (err, ev) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(ev);
                });
            });
        },
        createEvent(event, user) {
            const ev = new Event({
                date: event.date,
                description: event.description,
                sport: event.sport,
                peopleNeeded: event.peopleNeeded,
                price: event.price,
                contactPhone: event.contactPhone,
                place: event.place,
                creator: user.username
            });

            return new Promise((resolve, reject) => {
                ev.save((err) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(ev);
                });
            });
        },
        getAllEvents() {
            return new Promise((resolve, reject) => {
                Event.find({}, (err, events) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(events);
                });
            });
        },
        findEventByIdAndUpdate(id, otherEvent) {
            console.log(otherEvent);
            return new Promise((resolve, reject) => {
                Event.findByIdAndUpdate(id, otherEvent, null, (err, event) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(event);
                });
            });
        },
        getOngoingEvents() {
            return new Promise((resolve, reject) => {
                Event.find({
                    isFinished: false
                }, (err, events) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(events);
                });
            });
        }
    };
};