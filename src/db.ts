import dotenv = require("dotenv");
import mongoose = require("mongoose");

dotenv.config();

const db = mongoose.connection;

// below methods are written with inspiration of https://stackoverflow.com/a/17093472/6013366
db.on(
    'disconnected',
    msg => {
        console.log(`MongoDB disconnected! Message: ${msg}`);
        console.log("Will be tried in 5 seconds.");
        setTimeout(connectDb, 5000);
    }
);

const handleError = (error): void => {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect()
        .then(msg => {
            console.log("Disconnected!");
            console.log(`Message: ${msg}`);
            console.log("Will be tried in 5 seconds.");
            setTimeout(connectDb, 5000);
        })
        .catch(handleError);
}

export const connectDb = (): void => {
    const user = process.env.DB_USER;
    const pass = process.env.DB_PASS;
    const casePath = process.env.CASE_PATH;
    const connectStr = `mongodb://${user}:${pass}@ds249623.mlab.com:49623/${casePath}`;
    mongoose.connect(connectStr, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDb");
        })
        .catch(handleError);
};

export const isConnected = (): boolean => db.readyState === 1;

// db.once('open', () => console.log('MongoDB connection opened!'));
// db.on('reconnected', () => console.log('MongoDB reconnected!'));