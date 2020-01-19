import { HandlerArg } from "../types";
import { RecordModel as model } from "../models/record";
import Errors from "../Errors";
import { FindBetweenBody } from "../types";
import { checkConnection } from "../util";

const { MongoQueryError } = Errors;

const findBetween = async (arg: HandlerArg) => {
    const body: FindBetweenBody = new FindBetweenBody(arg.body);
    body.validate();
    checkConnection();
    try {
        return await model.aggregate([
            {
                $project: {
                    _id: 0,
                    key: 1,
                    createdAt: 1,
                    totalCount: {
                        $sum: "$counts"
                    }
                }
            },
            {
                $match: {
                    createdAt: {
                        $gte: new Date(body.startDate),
                        $lte: new Date(body.endDate)
                    },
                    totalCount: {
                        $lte: body.maxCount,
                        $gte: body.minCount
                    }
                }
            }
        ]);
    } catch (e) {
        console.error(e);
        const message = "MongoDb query is failed. Contact with api provider.";
        throw new MongoQueryError(message);
    }
}

export {
    findBetween
};