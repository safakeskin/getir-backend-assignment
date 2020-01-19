import dotenv = require("dotenv");
import {connectDb} from "../db";
import server from "../server";

dotenv.config();

const port = process.env.API_PORT;

connectDb();
server.listen(port, () => {
    console.log(`No error occurred! Server is listening at port: ${port} now.`);
});