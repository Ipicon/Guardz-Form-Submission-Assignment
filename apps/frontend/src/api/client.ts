import { up } from 'up-fetch';

export const api = up(fetch, () => ({
  baseUrl: import.meta.env.VITE_API_URL,
}));
