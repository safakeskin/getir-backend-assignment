import {Request, Response} from "express";

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
        res.send(result);
    }catch(e){
        console.error(e);
    }
};