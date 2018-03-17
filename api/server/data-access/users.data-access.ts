import { QueryResult } from 'pg';

import query, { simplecastSchemaName } from './database-connection';
import hashing from '../auth/hash';

//table name to use in queries
const tableName = `${simplecastSchemaName}.users`;

/**
 * Data access for users
 */
const usersDataAccess = {
  /**
   * Get all users from the database
   */
  getUsers(): Promise<QueryResult> {
    return query(`select user_id, username, email, access_level, creation_date from ${tableName}`);
  },

  /**
   * Register a new user to the database
   * @param username 
   * @param password 
   * @param email 
   */
  async registerUser(username: string, password: string, email: string): Promise<QueryResult> {
    const hash = await hashing.hashNewPassword(password);

    return query(`insert into ${tableName} (username, hash, email, creation_date) values ($1, $2, $3, $4)`,
      [username, hash, email, 'now']);
  },

  /**
   * Make sure the user logged in with the correct password
   * @param username 
   * @param password 
   */
  async authenticateUser(username: string, password: string): Promise<boolean> {
    const queryResult = await query(`select hash from ${tableName} where username = $1`, [username]);

    let hash: string = '';

    if (queryResult.rowCount === 1) {
      hash = queryResult.rows[0]['hash'];
    }

    return hashing.comparePassword(password, hash);
  }
}

export default usersDataAccess;