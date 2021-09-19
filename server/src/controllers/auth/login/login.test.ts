import mongoose from 'mongoose'
import request from "supertest";
import { app } from "../../../app";
import { clearDb, closeDb, connectDb } from "../../../utils/dbHandler";
import { signupTestUser, testUser } from "../signup/signup.test";

mongoose.disconnect();
beforeAll(async () => await connectDb());
afterEach(async () => await clearDb());
afterAll(async () => await closeDb());

const { email, password } = testUser;

export const loginTestUser = async () => {
  return await request(app)
    .get("/api/login")
    .send({ email, password })
};


describe('Login controller', () => {
  it("should login the user if user has account and password matches", async () => {
    await signupTestUser();
    const res = await loginTestUser();
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(email);
  });
});
