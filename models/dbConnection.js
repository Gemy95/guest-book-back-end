const mongoose = require("mongoose");

async function createConnection() {
    try {
        let connection = await mongoose.connect('mongodb://localhost/coformatiqueDB', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true });
        return connection;
    }
    catch (err) {
       return err;
    }
}

module.exports.connection = createConnection();