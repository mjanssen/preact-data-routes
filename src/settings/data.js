export const USER = 'user';
export const POST = 'post';
export const COMPANY_DATA = 'company_data';

export default {
  [USER]: () => ({
    api: 'https://jsonplaceholder.typicode.com/posts/1',
  }),
  [POST]: () => ({
    api: 'https://jsonplaceholder.typicode.com/posts/2',
  }),
  [COMPANY_DATA]: () => ({
    api: 'https://jsonplaceholder.typicode.com/posts/3',
  }),
};
