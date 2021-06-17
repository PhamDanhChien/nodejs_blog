const connection = require('../config/database');

class User {

    // Constructor
    constructor() {
        this.name = null;
        this.email = null;
        this.phone = null;
    }

    // Get all user
    index() {
        connection.query('SELECT * FROM users', function (error, results, fields) {
            if (error) throw error;
            
            console.log(results);
        });
    }

    // Find user by id
    show(id) {
        return `This is user id: ${id}`;
    }
}

module.exports = new User;

