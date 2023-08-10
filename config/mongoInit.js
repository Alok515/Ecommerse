const mongoose = require('mongoose');

//connecting to MoNGOdb USING MONGOOSE
mongoose.connect(process.env.DataBase)
    .then(() => console.log('Connected to database'))
    .catch(() => console.log("Failed to connect to database"));

