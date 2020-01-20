import {Request, Response, response} from "express";
import Errors from "./types/errors";
import { isConnected } from "./db";
import fs = require("fs");

const {MongoConnectionError} = Errors;

const docsPath = "./documentation.pdf";

export const defaultRouter = handler => async (req: Request, res: Response) => {
    const {body = {}, headers = {}, query = {}} = req;
    try{
        let result;
        const resultLike = handler({body, headers, query});
        if( resultLike.then ){
            result = await resultLike;
        }else{
            result = resultLike;
        }
        res.send({
            code: 0,
            msg: "success",
            records: result
        });
    }catch(error){
        console.error(error);
        res.send({
            code: error.code,
            msg: error.message,
            records: null
        });
    }
};

export const checkConnection = () : void => {
    if(isConnected() === false){
        const message = "Not connected to Db.";
        throw new MongoConnectionError(message);
    }
}

export const serveDocs = () : any => {
    const file = fs.createReadStream(docsPath);
    const stat = fs.statSync(docsPath);
    return {file, stat};
};