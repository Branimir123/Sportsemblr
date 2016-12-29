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
        createEvent(event) {
            console.log(event);
            const ev = new Event({
                date: event.date,
                description: event.description,
                sport: event.sport,
                peopleNeeded: event.peopleNeeded,
                price: event.price,
                contactPhone: event.contactPhone,
                place: event.place
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
        }
    };
};