module.exports = (router, eventController, passportConfig) => {
    router.get('/events/:id', eventController.getEventDetails);
    router.get('/events/sports/:sport', eventController.getEventsBySport);
    router.post('/events', passportConfig.isAuthenticated, eventController.createEvent);
    router.get('/events', eventController.getEvents);
}