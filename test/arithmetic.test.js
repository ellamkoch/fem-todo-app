import { expect, test } from 'vitest';

import { sum } from '@utils/arithmetics.js';
import { subtract } from '@utils/arithmetics.js';
import { multiply } from '@utils/arithmetics.js';
import { divide } from '@utils/arithmetics.js';

// Simple function to tests
test('adds 1 + 2 to equal 3', () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test('multiply 1 x 3 to equal 3', () => {
  const result = multiply(1,3);

  expect (result).toBe(3);
});

test('subtract 3 - 1 to equal 2', () => {
  const result = subtract(3,1);

  expect(result).toBe(2);
});

test ('divide 10 / 2 to equal 5', () => {
  const result = divide(10,2);

  expect(result).toBe(5);
});
