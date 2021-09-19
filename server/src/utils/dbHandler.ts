import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from 'mongoose';

let mongod: MongoMemoryServer;

export const connectDb = async () => {
  mongoose.disconnect();
  mongod = await MongoMemoryServer.create();
  const uri = await mongod.getUri();
  await mongoose.connect(uri);
};

export const closeDb = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};


export const clearDb = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
}
