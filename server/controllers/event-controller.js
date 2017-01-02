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
                    let request = event.sentRequests.find(r => r.user === req.user.username);
                    if (!request) {
                        event.sentRequests.push({
                            user: req.user.username
                        });
                    } else {
                        event.sentRequests.splice(event.sentRequests.indexOf(request), 1);
                    }

                    event.save(err => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                    })

                    return data.sendRequestToJoin(req.params.id, req.user.username, event.creator)
                })
                .then(response => {
                    return res.status(200);
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).send(err);
                });
        },
        acceptRequestToJoin(req, res) {
            let ev;
            data.findEventById(req.params.id)
                .then(event => {
                    event.participants.push({
                        username: req.body.user
                    });

                    ev = event;
                    let request = event.sentRequests.find(e => e.eventId === event.id && e.user === req.body.user);
                    event.sentRequests.splice(event.sentRequests.indexOf(request), 1);

                    event.save(err => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                    });

                    return data.findUserByUsername(req.user.username);
                })
                .then(user => {
                    let request = user.requests.find(e => e.eventId === ev.id && e.user === req.body.user);
                    user.requests.splice(user.requests.indexOf(request), 1);

                    user.save(err => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                    });

                    return res.status(200).send(user);
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).send(err);
                });
        }
    };
};