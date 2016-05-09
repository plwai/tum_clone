var mongo = require('mongodb').MongoClient;

var db = "";

module.exports = {
    setDB: function(db) {
        this.db = db;
    },
    getDB: function() {
        return this.db;
    }
}
