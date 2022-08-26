import { MongoClient } from 'mongodb';
import {
  DB_USER_NAME,
  DB_PASSWORD,
  DB_HOST_NAME,
  DB_NAME,
} from './db-constants';

const getConnectionString = (): string => {
  let conUrl = '';
  const dbUserName = encodeURIComponent(DB_USER_NAME);
  const dbPassword = encodeURIComponent(DB_PASSWORD);
  conUrl = `mongodb+srv://${dbUserName}:${dbPassword}@${DB_HOST_NAME}/${DB_NAME}`;
  return conUrl;
};

const connectMongoDb = async () => {
  const client = new MongoClient(getConnectionString());
  try {
    await client.connect();
    console.log('db connected');
  } catch (error) {
    console.log(error);
  }
};
export { connectMongoDb };
