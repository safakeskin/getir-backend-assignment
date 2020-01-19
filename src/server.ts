import express = require("express");
import recordRuter from "./routes/record";

const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.use("/record", recordRuter);

app.get('/', (req, res) => {
    res.send("Hello, world!");
})

app.post('/', (req: express.Request, res: express.Response) => {
    const message = "In order to interact with api, please read README.md";
    res.send(message);
});

export default app;