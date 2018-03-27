import { QueryResult } from 'pg';

import query, { simplecastSchemaName } from './database-connection';

//table name to use in queries
const feedTableName = `${simplecastSchemaName}.rss_feeds`;
const publicPodcastsTableName = `${simplecastSchemaName}.public_podcasts`;

/**
 * Data access for rss feeds
 */
const rssFeedDataAccess = {

  /**
   * Get all rss feeds from the database
   */
  getRssFeeds(): Promise<QueryResult> {
    return query(`SELECT * FROM ${feedTableName}, ${publicPodcastsTableName} WHERE ${feedTableName}.rss_feed_id = ${publicPodcastsTableName}.rss_feed_id`);
  }
}

export default rssFeedDataAccess;