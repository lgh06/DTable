// https://github.com/vercel/next.js/blob/00c68f38704c5bd2/examples/with-mongodb-mongoose/lib/dbConnect.js
// https://github.com/vercel/next.js/blob/1d2ac3b225e7fc29/examples/with-mongodb/lib/mongodb.js
// https://github.com/hoangvvo/nextjs-mongodb-app/blob/0496af33a39bcbddc/api-lib/middlewares/database.js
// https://docs.mongodb.com/drivers/node/current/usage-examples/findOne/  Version 4.2
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
global.mongodb = global.mongodb || {};


async function getClient() {
  if (!global.mongodb.client) {
    global.mongodb.client = new MongoClient(MONGODB_URI);
  }
  // It is okay to call connect() even if it is connected
  // using node-mongodb-native v4 (it will be no-op)
  // See: https://github.com/mongodb/node-mongodb-native/blob/4.0/docs/CHANGES_4.0.0.md
  await global.mongodb.client.connect();
  return global.mongodb.client;
}


// can be used in both api middleware and in api.
async function getDB(dbName, req) {
  if (!dbName) {
    dbName = 'blockdb'
  }
  let dbClient = await getClient();
  let db = dbClient.db(dbName);
  
  // used inside a middleware
  if (req){
    req.dbClient = dbClient
    req.db = db;
  }
  return db; // a Promised db
}

export {getDB as default, getDB, getClient};