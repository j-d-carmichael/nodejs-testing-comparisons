import { expect } from 'chai';
import b from './b';

it('should pass b', () => {
  expect(b(2)).to.equal(4);
});

