const request = require('supertest');
const app = require('./app');

describe('App API', () => {
  describe('GET /health', () => {
    it('should return status ok', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('ok');
    });

    it('should include version field', async () => {
      const res = await request(app).get('/health');
      expect(res.body).toHaveProperty('version');
    });
  });

  describe('GET /', () => {
    it('should return hello message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('Hello from DevOps App!');
    });
  });

  describe('GET /api/items', () => {
    it('should return list of items', async () => {
      const res = await request(app).get('/api/items');
      expect(res.statusCode).toBe(200);
      expect(res.body.items).toBeInstanceOf(Array);
      expect(res.body.items.length).toBeGreaterThan(0);
    });
  });
});
