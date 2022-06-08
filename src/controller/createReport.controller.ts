import { Request, Response } from "express";
import createReportService from "../service/createReport.service";

export default new class CreateReportController {
  async handle(req: Request, res: Response) {
    const { service, description, name, id } = req.body;

    const result = await createReportService.execute({ service, description, name, id });

    return res.json(result);
  }
}