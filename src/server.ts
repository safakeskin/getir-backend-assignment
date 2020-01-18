import express = require("express");
import dotenv = require("dotenv");

dotenv.config();

const port = process.env.API_PORT;

const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.post('/', (req: express.Request, res: express.Response) => {
    console.log("Incoming request to index(/)!");
    res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`If no error, server is listening at port: ${port} now.`);
} );