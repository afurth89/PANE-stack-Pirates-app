// TODO:

// 1. Get database working, figure out routing to communicate 
//    to database & perform CRUD
// 2. On client side, wire up Angular and connect view for showing pirates
// 3. Handle creation of pirate
// 4. Handle deletion
// 5. Handle update
// 6. Refactor!


const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const pirates = require('./routes/pirates');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('tiny'));

// The api prefix is just to distinguish that these are
// server-side routes that will be requesting and fetching 
// data
app.use('/api/pirates', pirates)

app.listen(3000, function() {
  console.log("Listening on port 3000...")
});

