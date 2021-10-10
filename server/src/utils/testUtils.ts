import { SuperAgentTest } from "supertest";

export const testUser = {
  name: "testUser",
  email: "test@email.com",
  password: "testPassword",
};

const { name, email, password } = testUser;

export const loginTestUser = async (agent: SuperAgentTest) => {
  return await agent.post("/api/login").send({ email, password });
};

export const signupTestUser = async (agent: SuperAgentTest) => {
  const { password } = testUser;
  const res = await agent.post("/api/signup").send({
    name: name,
    email: email,
    password: password,
  });
  return res;
};