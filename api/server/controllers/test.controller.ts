import { Request, Response } from 'express';
import db from '../data-access/database-connection';
import { Test } from '../models/test.model';

const testController = {
  get(req: Request, res: Response) {
    db.func('get_test')
    .then((data: any) => {
      let tests: Test[] = new Array<Test>();
    
      if (data != undefined) {
        tests = data.map((d: any) => {
          let tempTest = new Test();
    
          tempTest.testId = d['test_id'];
          tempTest.testString = d['test_string'];
    
          return tempTest;
        });
      }

      res.status(200).json(tests);
    })
    .catch((error: Error) => {
      res.status(500).json({
        message: error
      });
    });
  }
};

export default testController;