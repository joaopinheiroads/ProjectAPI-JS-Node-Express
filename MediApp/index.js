import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router.js';

const app = express();
const { json, urlencoded } = bodyParser;

app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

app.use('/', router);