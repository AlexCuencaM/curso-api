const mongoose = require('mongoose');
const dbConnection = () =>{
    mongoose.connect(process.env.DB_CON, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {console.log("DB Online");})
    .catch(error =>{
        console.log(error);
        throw new Error("Error with the init DB :c");
    });
}

module.exports = {
    dbConnection
}