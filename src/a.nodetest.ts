import { test } from 'node:test';
import assert = require('node:assert');
import a from './a';

test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(a(), 1);
});

