import supertest from 'supertest';
import app from '../index';

const endPoint = supertest(app);

describe('Test Endpoint response', (): void => {
  it('Passes The endpoint test', async (): Promise<void> => {
    const response = await endPoint.get('/api/img?title=test');
    // console.log(response.body);
    expect(response.status).toBe(200);
  });
});
