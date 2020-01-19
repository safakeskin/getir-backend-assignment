import express = require("express");
import recordRuter from "./routes/record";

const app = express();

const projectBaseUrl = "https://github.com/keskinsaf/getir-backend-assignment";

app.use(express.json());
// app.use(express.urlencoded());

app.use("/record", recordRuter);

app.get('/', (req, res) => {
    res.status(301).redirect(projectBaseUrl);
});

app.post('/', (req: express.Request, res: express.Response) => {
    const message = "In order to interact with api, please read README.md";
    res.send(message);
});

export default app;