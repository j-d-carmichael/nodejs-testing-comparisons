import { expect, test } from 'vitest'
import a from './a';
test('synchronous passing test', () => {
  expect(a()).toBe(1);
});
