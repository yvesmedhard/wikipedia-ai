const express = require('express');
const summaryRoute = require('./routes/summary');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/summary', summaryRoute);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});