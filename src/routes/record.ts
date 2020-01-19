import {Router} from "express";
import {defaultRouter} from "../util";
import * as handler from "../handlers/record";

const router = Router();

router.post("/findBetween", defaultRouter(handler.findBetween));

export default router;