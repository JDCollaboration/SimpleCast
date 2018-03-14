import { QueryResult } from 'pg';

import query, { simplecastSchemaName } from './database-connection';

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
  registerUser(username: string, password: string, email: string): Promise<QueryResult> {
    // TODO: hash the user's password
    return query(`insert into ${tableName} (username, hash, email, creation_date) values ($1, $2, $3, $4)`,
      [username, password, email, 'now']);
  }
}

export default usersDataAccess;