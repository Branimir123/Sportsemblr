const async = require('async');
const crypto = require('crypto');

module.exports = function (data) {
    return {
        getEventDetails(req, res) {
            const id = req.params.id;

            data.findEventById(id)
                .then(ev => {
                    return res.status(200)
                        .send(ev);
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500);
                });
        },
        getEventsBySport(req, res) {
            const sport = req.params.sport;

            data.findEventsForSport(sport)
                .then(events => {
                    res.send(events);
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500);
                });
        },
        createEvent(req, res) {
            data.createEvent(req.body, req.user)
                .then(ev => {
                    res.send(ev);
                })
                .catch(err => {
                    console.log(err);
                    res.send(err);
                });
        },
        getEvents(req, res) {
            data.getAllEvents()
                .then(events => {
                    res.send(events);
                })
                .catch(err => {
                    console.log(err);
                    res.send(err);
                })
        },
        editEvent(req, res) {
            const id = req.params.id,
                otherEvent = req.body;

            data.findEventByIdAndUpdate(id, otherEvent)
                .then(ev => {
                    res.send(ev);
                })
                .catch(err => res
                    .status(500)
                    .send(err));
        }
    };
};