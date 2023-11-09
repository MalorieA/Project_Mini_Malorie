import { InformationsSYS } from './InformationsSys';

//HEllooooooooooooooooooooooooooooo
describe('informationsSYS test suite', () => {
  jest.setTimeout(5000000);

  it('return infos sys', async () => {
    expect.assertions(4);
    const systemInfo = await InformationsSYS();

    expect(Array.isArray(systemInfo)).toBe(true);
    expect(systemInfo.length).toBeGreaterThan(0);

    expect(systemInfo[0]).toHaveProperty('model');
    expect(systemInfo[1]).toHaveProperty('brand');
  });
});
