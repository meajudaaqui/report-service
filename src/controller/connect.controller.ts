import { Request, Response } from "express";

export default new class ConnectController {
  async handle(req: Request, res: Response) {
    return res.json({message: "connected"})
  }
}