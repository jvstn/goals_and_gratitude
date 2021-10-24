import request from "supertest";
import { app } from "../../app";
import { User } from "../../models/user";
import { clearDb, closeDb, connectDb } from "../../utils/dbHandler";
import { loginTestUser, signupTestUser, testUser } from "../../utils/testUtils";

const agent = request.agent(app);

beforeAll(async () => await connectDb());
afterEach(async () => await clearDb());
afterAll(async () => await closeDb());

describe("Goal controller", () => {
  it("should create a goal", async () => {
    await signupTestUser(agent);
    await loginTestUser(agent);
    await agent
      .post("/api/goals")
      .send({ text: "being my best", email: testUser.email });
    const user = await User.findOne({ email: testUser.email });
    expect(
      user.goals.find((item) => item.text === "being my best")
    ).toBeTruthy();
  });

  it("should read this goal", async () => {
    const date = new Date().toISOString();
    await signupTestUser(agent);
    await loginTestUser(agent);
    await agent.post("/api/goals").send({ text: "being my best" });
    const res = await agent.get(`/api/goals?date=${date}`);
    expect(res.body[0].text).toBe("being my best");
  });

  it("should update a goal", async () => {
    await signupTestUser(agent);
    await loginTestUser(agent);
    const postRes = await agent.post("/api/goals").send({ text: "being my best" });
    const goalId = postRes.body[0]._id;
    const putRes = await agent.put("/api/goals").send({ text: "always being my best", _id: goalId });
    console.log("put response",putRes.body);
    const getRes = await agent.get(`/api/goals?date=${new Date().toISOString()}`);
    console.log("get response",getRes.body);
    expect(getRes.body[0].text).toBe("always being my best");
  });
});
