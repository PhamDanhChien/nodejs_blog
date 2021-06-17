const User = require('../models/User');

class UserController {
    // [GET] /user
    index(req, res) {
        res.send(User.index());
    }

    // [GET] /home/userid
    show(req, res) {
        let { userId } = req.params;
        res.send( User.show(userId) );
    }
}

module.exports = new UserController;