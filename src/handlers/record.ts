import {HandlerArg} from "../types";
import {RecordModel as model} from "../models/record";

interface FindBetweenBody{
    startDate: string;
    endDate: string;
    minCount: string;
    maxCount: string;
}

const findBetween = async (arg: HandlerArg) => {
    const body: FindBetweenBody = arg.body;
    // create model, then query it
    const data = await model.aggregate([
        {
            $project: {
                key: 1,
                value: 1,
                createdAt: 1,
                counts: 1,
                countsTotal: {
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
                countsTotal: {
                    $lte: body.maxCount,
                    $gte: body.minCount
                }
            }
        },
        {
            $project: {
                countsTotal: 0
            }
        }
    ]);
    return data;
}

export {
    findBetween
};