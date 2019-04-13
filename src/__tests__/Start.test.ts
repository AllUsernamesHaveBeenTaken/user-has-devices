import { Welcome } from '../index';
test('Welcome message', () => {
  expect(Welcome()).toBe('Hi, this package is still in development and will soon be production ready!');
});
