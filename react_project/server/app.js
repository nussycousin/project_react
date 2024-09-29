const express = require('express');
const cors = require('cors');
require("./db/dbConnect.js")
const mainRoute = require('./routes/indexRoute.js')
const app = express();



app.use(express.json());
app.use(cors());
app.use('/', mainRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port 3000');
});
