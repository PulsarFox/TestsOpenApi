const initializeUserRoutes = (app) => {
    app.get('/users', (req, res) => res.send("Get all users"));
    app.get('/user/:id', (req, res) => res.send(`Get user ${req.params.id}`));
}

module.exports = initializeUserRoutes;