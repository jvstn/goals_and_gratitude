import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../../app";
import { User } from "../../../models/user";
import { clearDb, closeDb, connectDb } from "../../../utils/dbHandler";
import { signupUser } from "../signup";
import { signupTestUser, testUser } from "../signup/signup.test";

mongoose.disconnect();

beforeAll(async () => await connectDb());
afterEach(async () => await clearDb());
afterAll(async () => await closeDb());

const {name, email, password } = testUser;

export const loginUser = async () => {
  return request(app)
    .get("/api/login")
    .send({ email, password })
};

describe("Login controller", () => {
  it("should login the user if user has account and password matches", async () => {
    await signupTestUser();
    const res = await loginUser();
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("testUser")
  });
});
