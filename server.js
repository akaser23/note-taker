const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();

// const fs = require('fs');
// const path = require('path');
// const { notes } = require('./data/db.json');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//take input from user
app.use(express.urlencoded({encoded: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

//port working message
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});