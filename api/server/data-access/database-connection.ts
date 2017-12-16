import * as pgPromise from 'pg-promise';
import { IMain, IDatabase, TConfig } from 'pg-promise';

const pgp: IMain = pgPromise({});

const cn: TConfig = {
  host: process.env.DB_HOST,
  port: +`${process.env.DB_PORT}`, 
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const db:IDatabase<any> = pgp(cn);

export default db;