require('dotenv').config();
// const https = require('https');
// const fs = require('fs');
const express = require('express');
const app = express();
const sequelize = require('./database');
const user = require('./controllers/usercontroller');
const log = require('./controllers/logcontroller');

// const options = {
//     key: fs.readFileSync( './https/localhost.key' ),
//     cert: fs.readFileSync( './https/localhost.cert' ),
//     requestCert: false,
//     rejectUnauthorized: false
// };

sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));
app.use('/user', user);
app.use('/log', log);

// var app = express();
// var port = process.env.PORT || 8000;
// var server = https.createServer( options, app );

// server.listen( port, function () {
//     console.log( 'Express server listening on port ' + server.address().port );
// } );

app.listen(8000, function() {
    console.log('App is listening on port 8000');
});