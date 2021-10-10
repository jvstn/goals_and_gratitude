import mongoose from 'mongoose'
import request, { SuperAgentTest } from "supertest";
import { app } from "../../../app";
import { clearDb, closeDb, connectDb } from "../../../utils/dbHandler";
import { loginTestUser, signupTestUser, testUser } from '../../../utils/testUtils';

beforeAll(async () => await connectDb());
afterAll(async () => await closeDb());

const { email, password } = testUser;




describe('Login controller', () => {
  it("should login the user if user has account and password matches", async () => {
    const agent = request.agent(app);
    await signupTestUser(agent);
    const res = await loginTestUser(agent);
    expect(res.statusCode).toBe(200);
  });
});
