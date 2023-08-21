import { useEffect, useState } from 'react';
import { CallAPI } from './API';
import { Base64 } from './base64';

 const useLaunchDarkly = (
  payload: string | null,
  tokenId: string,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<object>({});

  // Custom function to pass on payload and tokenId
  const fetchData = async (base64Payload: string, tokenId: string) => {
      setIsLoading(true);
      try {
        const outputJson: any = await CallAPI('GET', base64Payload, tokenId);
        setIsLoading(false);
        if (outputJson) {
          const flagData = [];
          for (const key in outputJson) {
            const flagObject = {
              [key]: outputJson[key]?.value?.visible ? outputJson[key]?.value?.visible : false,
            };
            flagData.push(flagObject);
          }
          setApiData(flagData);
        }
      } catch (error) {
        setIsLoading(false);
        setApiData({ type: 'error', message: error });
      }
    };

    useEffect(() => {
      if (typeof payload === 'string') {
        const base64Payload = Base64.encode(payload);
        fetchData(base64Payload, tokenId);
      }
    }, [payload, tokenId]);

  return { isLoading, apiData };
};

export default useLaunchDarkly;
