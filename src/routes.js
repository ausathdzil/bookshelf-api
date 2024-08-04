export const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello World!';
    },
  },
  {
    method: 'POST',
    path: '/books',
    handler: () => {},
  },
  {
    method: 'GET',
    path: '/books',
    handler: () => {},
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: () => {},
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: () => {},
  },
];
