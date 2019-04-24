const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');

// Public //
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars //
app.set('view engine', 'hbs');
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'index' }));

// Require modules //
const slash = require('./routes/slash');

// Routes //
app.use('/', slash);

// Express Server //
const PORT = 7001;
app.listen(PORT, () => { console.log('Server running on port ' + PORT) });