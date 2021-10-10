import request from 'supertest'
import { app } from '../../app';
import { User } from '../../models/user';
import { clearDb, closeDb, connectDb } from '../../utils/dbHandler'
import { loginTestUser, signupTestUser, testUser } from '../../utils/testUtils';

const agent = request.agent(app);


beforeAll(async () => {
  await connectDb();
  
});
// afterEach(() => clearDb());
afterAll(async () => await closeDb());


describe('Goal controller', () => {
  
  it('should create a goal', async () => {
    await signupTestUser(agent);
    await loginTestUser(agent);
    await agent.post('/api/goals').send({ text: "being my best", email: testUser.email });
    const user = await User.findOne({ email: testUser.email });
    expect(user.goals.find((item) => item.text === "being my best")).toBeTruthy();
  });
  
})