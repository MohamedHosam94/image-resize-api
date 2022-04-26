import getCachedImg from '../utils/utils';

describe('Test utilities function', (): void => {
  it('should contain the cache word', async () => {
    const result = await getCachedImg('fjord', 'fjord', 200, 200);
    expect(result).toContain('-cached');
  });
});
