import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from 'mongoose';
let mongod: MongoMemoryServer;

/**
 * Connect to the in-memory database.
 */
export const connectDb = async () => {
  mongod = await MongoMemoryServer.create();
  const uri = await mongod.getUri();
  await mongoose.connect(uri);
};

/**
 * Drop database, close the connection and stop mongod.
 */
export const closeDb = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};



/**
 * Remove all the data for all db collections.
 */
export const clearDb = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
}
