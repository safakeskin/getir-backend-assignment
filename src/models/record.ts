import {Schema, model} from "mongoose";

export const RecordSchema = new Schema({
    key: String,
    value: String,
    createdAt: {type: Date},
    counts: [{
        type: Number
    }]
});

export const RecordModel = model('record', RecordSchema);
