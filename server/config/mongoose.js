var mongoose = require("mongoose");



module.exports = function (config) {
    console.log("Trying to  connect: " + config.db);
    mongoose.connect(config.db);
    var db = mongoose.connection;
   
   
    db.on('error', console.error.bind(console, 'connection err'));
    db.once('open', function callback() {
        console.log("db connected:" + config.db);
    })
}


