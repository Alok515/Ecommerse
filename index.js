const express = require('express');
const router = require('./route');
require('dotenv').config();
require('./config/mongoInit');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//root routes
app.use('/',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


