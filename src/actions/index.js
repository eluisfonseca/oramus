import axios from 'axios';

const ROOT_URL = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default';

export const GET_TODAY = 'GET_TODAY';
export const GET_TOMORROW = 'GET_TOMORROW';
export const GET_YESTERDAY = 'GET_YESTERDAY';

export function getPodium(day) {
  //Y - Yesterday; T - Today; M - Tomorrow
  switch (day) {
    case 'Y':
      const url = `${ROOT_URL}/yesterday`;
      const request = axios.get(url);
      return {
        type: GET_YESTERDAY,
        payload: request
      };
      break;
    case 'T':
      const url = `${ROOT_URL}/today`;
      const request = axios.get(url);
      return {
        type: GET_TODAY,
        payload: request
      };
      break;
    case 'M':
      const url = `${ROOT_URL}/tomorrow`;
      const request = axios.get(url);
      return {
        type: GET_TOMORROW,
        payload: request
      };
      break;
  }
}
