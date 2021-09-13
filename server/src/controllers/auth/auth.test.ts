import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";
import { clearDb, closeDb, connectDb } from "../../utils/dbHandler";

mongoose.disconnect();

beforeAll(async () => await connectDb());
afterEach(async () => await clearDb());
afterAll(async () => await closeDb());

describe("Auth controller", () => {
  const testUser = {
    name: "user",
    username: "testUser",
    password: "testPassword",
  };
  
  const signupUser = async () => {
    const { username, password } = testUser;
    const res = await request(app).post("/api/auth/signup").send({
      username: username,
      password: password,
    });
    return res;
  };


  it("should signup user", async () => {
    const res = await signupUser();
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Successfully signed up");
  });
});
