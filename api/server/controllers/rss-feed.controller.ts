import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import rssFeedDataAccess from '../data-access/rss-feeds.data-access';
import { RssFeed } from '../models/index';

/**
 * Convert the results of a query into an array of RssFeed objects
 * @param data 
 */
const getRssFeedsFromQueryResult = (data: QueryResult) => {
  let ret = new Array<RssFeed>();

    if (data != undefined && data.rowCount > 0) {
      data.rows.forEach(row => {
        let temp = new RssFeed();

        temp.rssFeedId = +row['rss_feed_id'];
        temp.url = row['url'];
        temp.playCount = +row['play_count'];

        ret.push(temp);
      });
    }

    return ret;
};

/**
 * Rss Feed controller
 */
const rssFeedController = {

  /**
   * Get rss feeds from the database
   * @param req 
   * @param res 
   */
  getRssFeeds (req: Request, res: Response) {
    let ret: RssFeed[];

    rssFeedDataAccess.getRssFeeds()
    .then((data: QueryResult) => {
      res.json(getRssFeedsFromQueryResult(data));
    })
    .catch((error: Error) => {

      //TODO - do better logging
      console.error(error);
    });
  }
}

export default rssFeedController;