import {Request, Response} from "express";
import Errors from "./Errors";
import { isConnected } from "./db";

const {MongoConnectionError} = Errors;

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