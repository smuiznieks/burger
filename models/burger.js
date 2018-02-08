// Import ORM
var orm = require('../config/orm');

// Call functions using specific input for the ORM
var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },
    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },
    updateOne: function(id, callback) {
        orm.updateOne(id, function(res) {
            callback(res);
        });
    }
};

// Export the database functions
module.exports = burger;