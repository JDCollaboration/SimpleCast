import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import usersDataAccess from '../data-access/users.data-access';
import { UserModel } from '../models/user.model';

/**
 * Convert the results of a query into an array of RssFeed objects
 * @param data 
 */
const getUsersFromQueryResult = (data: QueryResult) => {
  let ret = new Array<UserModel>();

    if (data != undefined && data.rowCount > 0) {
      data.rows.forEach(row => {
        let temp = new UserModel();

        temp.userId = +row['user_id'];
        temp.username = row['username'];
        temp.email = row['email'];
        temp.accessLevel = +row['access_level'];
        temp.creationDate = new Date(row['creation_date']);

        ret.push(temp);
      });
    }

    return ret;
};

/**
 * Users controller
 */
const usersController = {
  /**
   * Get users from the database
   * @param req 
   * @param res 
   */
  getUsers (req: Request, res: Response) {
    usersDataAccess.getUsers()
    .then((data: QueryResult) => {
      const users = getUsersFromQueryResult(data);
      res.status(200).json(users);
    })
    .catch((error: Error) => {
      res.status(500).json(error);
    });
  },

  /**
   * Register a new user in the database
   * @param req 
   * @param res 
   */
  registerUser (req: Request, res: Response) {
    const { username, password, email } = req.body;

    usersDataAccess.registerUser(username, password, email)
    .then((data: QueryResult) => {
      res.status(201).json(data);
    })
    .catch((error: Error) => {
      res.status(500).json(error);
    });
  },

  /**
   * Log the user in
   * @param req 
   * @param res 
   */
  login (req: Request, res: Response) {
    const { username, password } = req.body;

    usersDataAccess.authenticateUser(username, password)
    .then(success => {
      res.status(200).json(success);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  }
}

export default usersController;