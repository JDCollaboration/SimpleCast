import db from './database-connection';
import { Test } from '../models/test.model';

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

        console.log(tests);
      })
      .catch((error: Error) => {
        console.log(error);
      });