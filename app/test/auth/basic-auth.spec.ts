import { createTestApp } from '../utils/bootstrap';
import request from 'supertest';

describe('Basic Auth', () => {
  let bootstrap: Awaited<ReturnType<typeof createTestApp>>;

  beforeAll(async () => {
    bootstrap = await createTestApp();
  });

  beforeEach(async () => {
    await bootstrap.methods.beforeEach();
  });

  afterAll(async () => {
    await bootstrap.methods.afterAll();
  });

  describe('POST /auth/signup', () => {
    it('should sign up a new user', async () => {
      const response = await request(bootstrap.app.getHttpServer()).post('/auth/signup').send({
        email: 'test@example.com',
        username: 'testuser',
        password: 'testpassword',
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('accessToken');
      expect(response.body.accessToken.length).toBeGreaterThan(0);
    });
  });
});
