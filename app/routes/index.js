const UserRouter = require('./user');
// const PageController = require('./page');

function route(app) {
    app.use('/user', UserRouter);
    // app.use('/', PageController);
}

module.exports = route;