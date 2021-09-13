import request from 'supertest'
import { app } from '../app';

describe('Hello controller', () => {
  it('should send "Hello, World"', async () => {
    const res = await request(app)
      .get('/api/hello')
    console.log(res)
    expect(res.text).toBe("Hello, world");
  });
  
});
