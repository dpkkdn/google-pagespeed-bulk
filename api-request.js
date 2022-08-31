/* Modules */
import axios from 'axios';

/* API Parameters */
const endpoint =
  'https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed'; // Endpoint
const key = ''; // API Key (https://developers.google.com/speed/docs/insights/v5/get-started)

let tempPsiId = 0;
export const uniquePsiDummyString = 'tempPsiId';
const addtempPsiIdToUrl = (url) => {
  if (url.includes('?')) {
    return `${url}&${uniquePsiDummyString}=${tempPsiId}`;
  }
  return `${url}?${uniquePsiDummyString}=${tempPsiId}`;
}

// Custom function to request PageSpeed API
export const apiRequest = async (url, device) => {
  tempPsiId += 1;
  const { data } = await axios(`${endpoint}?url=${encodeURIComponent(addtempPsiIdToUrl(url))}`, {
    params: {
      strategy: device,
      key: key,
    },
  });
  return data;
};
