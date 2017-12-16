import { Request, Response } from 'express';

const basicController = {
  get(req: Request, res: Response) {
    res.json({
      message: 'Welsome to SimpleCast API'
    });
  }
};

export default basicController;