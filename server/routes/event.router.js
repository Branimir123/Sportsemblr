module.exports = (router, eventController, passportConfig) => {
    router.get('/events/:id', eventController.getEventDetails);
    router.get('/events/sports/:sport', eventController.getEventsBySport);
    router.post('/events', passportConfig.isAuthenticated, eventController.createEvent);
    router.get('/events', eventController.getEvents);
    router.post('/events/:id', passportConfig.isAuthenticated, eventController.editEvent);
    router.get('/ongoingevents', eventController.getOngoingEvents);
    router.post('/rating', passportConfig.isAuthenticated, eventController.ratePlayers);
}