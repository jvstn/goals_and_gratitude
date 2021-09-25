import mongoose from 'mongoose'
import request, { SuperAgentTest } from "supertest";
import { app } from "../../../app";
import { clearDb, closeDb, connectDb } from "../../../utils/dbHandler";
import { signupTestUser, testUser } from "../signup/signup.test";

mongoose.disconnect();
beforeAll(async () => await connectDb());
afterAll(async () => await closeDb());

const { email, password } = testUser;

export const loginTestUser = async (agent: SuperAgentTest) => {
  return await agent
    .post("/api/login")
    .send({ email, password })
};


describe('Login controller', () => {
  it("should login the user if user has account and password matches", async () => {
    const agent = request.agent(app);
    await signupTestUser();
    const res = await loginTestUser(agent);
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(email);
  });
});
