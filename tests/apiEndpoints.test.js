const request = require("supertest");
const server =  require("../dist/server")["default"];

describe("/ GET test", () => {
    const message = "Hello, world!";
    it(`GET request to index (/) should return ${message}`, async () => {
        const res = await request(server).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe(message);
    });
});

describe("/record/findBetween POST test", () => {
    const expectedResult = {
        "code": 3,
        "msg": "Not connected to Db.",
        "records": null
    }
    const requestBody = {
        "startDate": "2017-01-26",
        "endDate": "2017-01-28",
        "minCount": 2700,
        "maxCount": 3000
    };
    it("POST request to /record/findBetween", async () => {
        const res = await request(server).post("/record/findBetween")
            .send(requestBody);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(expectedResult);
    });
});

describe("/index GET test", () => {
    it("GET request ton /index", async () => {
        const res = await request(server).get("/index");
        expect(res.statusCode).toEqual(404);
    });
})