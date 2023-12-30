import a from './a';
test('synchronous passing test', () => {
  // This test passes because it does not throw an exception.
  expect(a()).toBe(1);
});
