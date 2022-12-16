import { MongoClient } from "mongodb";
import {
  DB_USER_NAME,
  DB_PASSWORD,
  DB_HOST_NAME,
  DB_NAME,
} from "./db-constants";

const getConnectionString = (): string => {
  let conUrl = "";
  const dbUserName = encodeURIComponent(DB_USER_NAME);
  const dbPassword = encodeURIComponent(DB_PASSWORD);
  conUrl = `mongodb+srv://${dbUserName}:${dbPassword}@${DB_HOST_NAME}/${DB_NAME}`;
  return conUrl;
};

let _db: any;
const MongoConnect = (callback: any) => {
  MongoClient.connect(getConnectionString())
    .then((client) => {
      _db = client.db();
      callback();
    })
    .catch((err) => {
      throw err;
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw "no DB found";
};

export { getDB, MongoConnect };
