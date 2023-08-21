// launchDarklyConfig.test.js
import { getBaseURI } from '../constants';

describe('baseURI', () => {
  test('should have the correct value', () => {
    expect(getBaseURI).toBe('https://app.launchdarkly.com/sdk/evalx/');
  });
});

describe('Snapshot for baseURI',()=>{
    it('renders Snapshot without issues',()=>{
      expect(getBaseURI).toMatchSnapshot();
    })
})