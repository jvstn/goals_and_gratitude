import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../../app";
import { User } from "../../../models/user";
import { clearDb, closeDb, connectDb } from "../../../utils/dbHandler";

mongoose.disconnect();

beforeAll(async () => await connectDb());
afterEach(async () => await clearDb());
afterAll(async () => await closeDb());


export const testUser = {
  name: "testUser",
  email: "test@email.com",
  password: "testPassword",
};

export const signupTestUser = async (
  name = testUser.name,
  email = testUser.email
) => {
  const { password } = testUser;
  const res = await request(app).post("/api/signup").send({
    name: name,
    email: email,
    password: password,
  });
  return res;
};

describe("Signup route", () => {
  

  it("should signup user", async () => {
    const res = await signupTestUser();
    expect(res.statusCode).toBe(200);

    const user = await User.findOne({ email: testUser.email }).exec();
    expect(user).toBeTruthy();
  });

  it('should not make duplicate accounts', async () => {
    await signupTestUser();
    const res = await signupTestUser('altName', testUser.email)
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("Email already in use. Please login");
  });
  
});
