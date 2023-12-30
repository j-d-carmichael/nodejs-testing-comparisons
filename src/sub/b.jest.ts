import b from './b';

test('synchronous passing test', () => {
  // This test passes because it does not throw an exception.
  expect(b(2)).toBe(4);
});

