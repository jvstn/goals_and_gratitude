import request from "supertest";
import { app } from "../../app";
import { User } from "../../models/user";
import { clearDb, closeDb, connectDb } from "../../utils/dbHandler";
import { loginTestUser, signupTestUser, testUser } from "../../utils/testUtils";

const agent = request.agent(app);

beforeAll(async () => await connectDb());
afterEach(async () => await clearDb());
afterAll(async () => await closeDb());

describe("Affirmation controller", () => {
  // Goal tests
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
    const postRes = await agent
      .post("/api/goals")
      .send({ text: "being my best" });
    const goalId = postRes.body._id;
    const putRes = await agent
      .put("/api/goals")
      .send({ text: "always being my best", _id: goalId });
    const getRes = await agent.get(
      `/api/goals?date=${new Date().toISOString()}`
    );
    expect(getRes.body[0].text).toBe("always being my best");
  });

  it("should delete a goal", async () => {
    await signupTestUser(agent);
    await loginTestUser(agent);
    await agent.post("/api/goals").send({ text: "being my best" });
    const user = await User.findOne({ email: testUser.email });
    const goal = user.goals.find((item) => item.text === "being my best");
    const { _id } = goal;
    expect(
      user.goals.find((item) => item.text === "being my best")
    ).toBeTruthy();
    await agent.delete("/api/goals").send({ _id });
    const res = await agent.get(`/api/goals?date=${new Date().toISOString()}`);
    expect(res.body.length).toBe(0);
  });

  // Grats tests
  it("should create a grat", async () => {
    await signupTestUser(agent);
    await loginTestUser(agent);
    await agent
      .post("/api/grats")
      .send({ text: "being my best", email: testUser.email });
    const user = await User.findOne({ email: testUser.email });
    expect(
      user.grats.find((item) => item.text === "being my best")
    ).toBeTruthy();
  });

  it("should read this grat", async () => {
    const date = new Date().toISOString();
    await signupTestUser(agent);
    await loginTestUser(agent);
    await agent.post("/api/grats").send({ text: "being my best" });
    const res = await agent.get(`/api/grats?date=${date}`);
    expect(res.body[0].text).toBe("being my best");
  });

  it("should update a grat", async () => {
    await signupTestUser(agent);
    await loginTestUser(agent);
    const postRes = await agent
      .post("/api/grats")
      .send({ text: "being my best" });
    const gratId = postRes.body._id;
    await agent
      .put("/api/grats")
      .send({ text: "always being my best", _id: gratId });
    const getRes = await agent.get(
      `/api/grats?date=${new Date().toISOString()}`
    );
    expect(getRes.body[0].text).toBe("always being my best");
  });

  it("should delete a grat", async () => {
    await signupTestUser(agent);
    await loginTestUser(agent);
    const postRes = await agent
      .post("/api/grats")
      .send({ text: "being my best" });
    const user = await User.findOne({ email: testUser.email });
    const grat = user.grats.find((item) => item.text === "being my best");
    const { _id } = postRes.body;
    expect(
      user.grats.find((item) => item.text === "being my best")
    ).toBeTruthy();
    await agent.delete("/api/grats").send({ _id });
    const res = await agent.get(`/api/grats?date=${new Date().toISOString()}`);
    expect(res.body.length).toBe(0);
  });
});
