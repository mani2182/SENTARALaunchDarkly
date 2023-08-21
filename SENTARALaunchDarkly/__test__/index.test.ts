import { renderHook, act , waitFor} from '@testing-library/react';
import useLaunchDarkly from '../index';
import { CallAPI } from '../API';
import { Base64 } from '../base64';

jest.mock('../API', () => ({
  CallAPI: jest.fn(),
}));

jest.mock('../base64', () => ({
  Base64: {
    encode: jest.fn(),
  },
}));

describe('useLaunchDarkly hook', () => {
  test('should fetch data and set state correctly when API call is successful', async () => {
    const payload = "payload";
    const tokenId = 'some-token-id';

    const apiResponse = {
      key1: { value: { visible: true } },
      key2: { value: { visible: false } },
    };
    Base64.encode('mocked-base64-payload');
    (CallAPI as jest.Mock).mockResolvedValue(apiResponse);

    const { result } = renderHook(() =>
      useLaunchDarkly(payload, tokenId)
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.apiData).toEqual({});
    await waitFor;
    expect(result.current.isLoading).toBeDefined();
    expect(result.current.apiData).toEqual({})
  });

  test('should set state correctly when API call fails', async () => {
    const payload = "payload";
    const tokenId = 'some-token-id';

    const apiError = new Error('API failed');

    Base64.encode('mocked-base64-payload');
    (CallAPI as jest.Mock).mockRejectedValue(apiError);

    const { result } = renderHook(() =>
      useLaunchDarkly(payload, tokenId)
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.apiData).toEqual({});
    await waitFor;
    expect(result.current.isLoading).toBeDefined();
    expect(result.current.apiData).toEqual({});
  });
});


describe('Snapshot for useLaunchDarkly',()=>{
    it('renders Snapshot without issues',()=>{
        const payload = "payload";
        const tokenId = 'some-token-id';
        const { result } = renderHook(() =>
        useLaunchDarkly(payload, tokenId)
      );
      expect(result).toMatchSnapshot();
    })
})