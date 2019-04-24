const express = require('express');
const app = express();


// Express Server //
const PORT = 7001;
app.listen(PORT, () => { console.log('Server running on port ' + PORT) });