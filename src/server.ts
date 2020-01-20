import express = require("express");
import recordRuter from "./routes/record";
import {serveDocs} from "./util";

const app = express();

const projectBaseUrl = "https://github.com/keskinsaf/getir-backend-assignment";

app.use(express.json());
// app.use(express.urlencoded());

app.use("/record", recordRuter);

// inspired by https://stackoverflow.com/a/31106110/6013366
app.get("/docs", (req, res) => {
    try{
        const {file, stat} = serveDocs();
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=docs.pdf');
        file.pipe(res);
    }catch(e){
        res.status(500).send("Error occurred at server.");
    }
})

app.get("/", (req, res) => {
    res.status(301).redirect(projectBaseUrl);
});

export default app;