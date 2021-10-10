
import request from 'supertest'
import { app } from "../../../app";
import mongoose from 'mongoose'
import { closeDb, connectDb } from "../../../utils/dbHandler";
import { loginTestUser } from '../../../utils/testUtils';

beforeAll(async () => await connectDb());
afterAll(async () => await closeDb());

describe('Logout controller',  () => {
  it('should clear cookies', async () => {
    const agent = request.agent(app);
    await loginTestUser(agent);
    await request(app)
      .get("/api/logout")
      .expect(200)
      .expect(
        "set-cookie",
        "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
      );
  })
  
})
