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
                .catch(err => {
                    console.log(err);

                    res.send(err)
                });
        },
        getOngoingEvents(req, res) {
            data.getOngoingEvents()
                .then(events => {
                    res.send(events);
                })
                .catch(err => {
                    console.log(err);
                    res.send(err);
                })
        },
        ratePlayers(req, res) {
            data.ratePlayers(req.body.players, req.body.user, req.body.sport)
                .then(res => {
                    res.send(res);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send(err);
                })
        },
        requestToJoin(req, res) {
            data.findEventById(req.params.id)
                .then(event => {
                    if (event.sentRequests.find(r => r.username === user.username).length === 0) {

                        event.sentRequests.push({
                            user: req.user.username
                        });

                        event.save(err => {
                            console.log(err);
                            return res.status(500).send(err);
                        })

                        return data.sendRequestToJoin(req.params.id, req.user.username, event.creator)
                    }

                    return res.send({
                        result: 'User already sent request'
                    });
                })
                .then(response => {
                    return res.status(200);
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).send(err);
                });
        }
    };
};