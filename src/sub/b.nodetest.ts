import { test } from 'node:test';
import b from './b';
import assert = require('node:assert');

test('synchronous passing test', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(b(2), 4);
});

