import { QueryResult } from 'pg';

import query, { simplecastSchemaName } from './database-connection';

//table name to use in queries
const tableName = `${simplecastSchemaName}.rss_feeds`;

/**
 * Data access for rss feeds
 */
const rssFeedDataAccess = {

  /**
   * Get all rss feeds from the database
   */
  getRssFeeds(): Promise<QueryResult> {
    return query(`select * from ${tableName}`);
  }
}

export default rssFeedDataAccess;