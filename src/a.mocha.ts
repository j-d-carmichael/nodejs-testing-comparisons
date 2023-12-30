import { expect } from 'chai';
import a from './a';

it('should pass a', () => {
  expect(a()).to.equal(1);
});

