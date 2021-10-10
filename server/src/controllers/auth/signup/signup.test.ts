import request from "supertest";
import { app } from "../../../app";
import { User } from "../../../models/user";
import { clearDb, closeDb, connectDb } from "../../../utils/dbHandler";
import { signupTestUser, testUser } from "../../../utils/testUtils";

beforeAll(async () => await connectDb());
afterEach(async () => await clearDb());
afterAll(async () => await closeDb());






describe("Signup route", () => {
  

  it("should signup user", async () => {
    const agent = request.agent(app);
    const res = await signupTestUser(agent);
    expect(res.statusCode).toBe(200);

    const user = await User.findOne({ email: testUser.email }).exec();
    expect(user).toBeTruthy();
  });

  it('should not make duplicate accounts', async () => {
    const agent = request.agent(app);
    await signupTestUser(agent);
    const res = await signupTestUser(agent);
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("Email already in use. Please login");
  });
  
});
