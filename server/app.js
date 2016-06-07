// TODO:

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

// Configure express.static
app.use('/javascripts', express.static(__dirname + '/../client/javascripts'))
app.use('/stylesheets', express.static(__dirname + '/../client/stylesheets'))
app.use('/views', express.static(__dirname + '/../client/views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('tiny'));

// The api prefix is just to distinguish that these are
// server-side routes that will be requesting and fetching 
// data
app.use('/api/pirates', pirates)

app.get('*', (req, res) => {
  // This code is FORBIDDEN (Express thinks it could be malicious)
  // res.sendFile(__dirname + '/../client/views/layout.html')
  res.sendFile('layout.html', {root: './client/views'})
})

app.listen(3000, function() {
  console.log("Listening on port 3000...")
});

