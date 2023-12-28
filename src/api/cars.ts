import {Cars} from './types';

const BASE_URL = 'https://run.mocky.io/v3/';

export const fetchCars = (): Promise<Cars> =>
  fetch(BASE_URL + '4c7e0a8c-2870-44c2-99a2-c9d6b0762a4e', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .catch(e => {
      throw new Error(e);
    });
