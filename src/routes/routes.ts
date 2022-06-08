import { Router } from "express";

import connectController from "../controller/connect.controller";
import createReportController from "../controller/createReport.controller";

const router = Router();

router.get("/api", connectController.handle);

router.post("/api/report", createReportController.handle);

export {router}