module.exports = function (models) {
    const {
        Event,
        User
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

            ev.participants = [];
            ev.participants.push({
                username: ev.creator
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
        },
        ratePlayers(players, user, sport) {
            return new Promise((resolve, reject) => {
                players.forEach(function (player) {
                    User.find({
                        username: player.username
                    }, (err, user) => {
                        if (err) {
                            reject(err);
                        }
                        if (user) {
                            console.log(user);
                            user = user[0];

                            if (user.plays) {
                                let plays = user.plays.find(p => p.sport === sport);
                                if (plays) {
                                    plays = plays[0];

                                    plays.rating = (plays.rating * plays.count + player.rating) / (plays.count + 1);
                                } else {
                                    let play = {
                                        rating: player.rating,
                                        count: 1,
                                        sport: sport
                                    }

                                    user.plays.push(play);
                                }
                            } else {
                                let play = {
                                    rating: player.rating,
                                    count: 1,
                                    sport: sport
                                }

                                user.plays = [play];
                            }

                            user.save(err => {
                                console.log(err);
                            });
                        }
                    });
                }, this);
            });
        },
        sendRequestToJoin(id, user, author) {
            return new Promise((resolve, reject) => {
                User.findOne({
                    username: author
                }, (err, user) => {
                    if (err) {
                        reject(err);
                    }

                    let request = user.requests.find(r => {
                        r.eventId === id && r.user === user.username
                    });

                    if (!request) {
                        user.requests.push({
                            user: user.username,
                            eventId: id
                        });
                    } else {
                        user.requests.remove(user.requests.indexOf(request));
                    }

                    user.save(err => {
                        reject(err);
                    });

                    resolve();
                });
            });
        }
    };
};