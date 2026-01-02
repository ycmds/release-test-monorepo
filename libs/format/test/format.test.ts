import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { formatSum } from '../src/index.js';

describe('formatSum function tests', () => {
  test('should format sum of two positive numbers', () => {
    const result = formatSum(2, 3);
    assert.strictEqual(result, '2 + 3 = 5');
  });

  test('should format sum of negative numbers', () => {
    const result = formatSum(-5, -3);
    assert.strictEqual(result, '-5 + -3 = -8');
  });

  test('should format sum with zero', () => {
    const result = formatSum(0, 0);
    assert.strictEqual(result, '0 + 0 = 0');
  });

  test('should format sum of positive and negative numbers', () => {
    const result = formatSum(10, -5);
    assert.strictEqual(result, '10 + -5 = 5');
  });

  test('should format sum with decimal numbers', () => {
    const result = formatSum(1.5, 2.5);
    assert.strictEqual(result, '1.5 + 2.5 = 4');
  });

  test('should format sum with large numbers', () => {
    const result = formatSum(1000000, 2000000);
    assert.strictEqual(result, '1000000 + 2000000 = 3000000');
  });

  test('should format sum resulting in zero', () => {
    const result = formatSum(5, -5);
    assert.strictEqual(result, '5 + -5 = 0');
  });

  test('should format sum with one zero', () => {
    const result = formatSum(42, 0);
    assert.strictEqual(result, '42 + 0 = 42');
  });

  test('should format sum of negative and positive to positive', () => {
    const result = formatSum(-3, 8);
    assert.strictEqual(result, '-3 + 8 = 5');
  });

  test('should format sum with very small numbers', () => {
    const result = formatSum(0.1, 0.2);
    assert.strictEqual(result, '0.1 + 0.2 = 0.30000000000000004');
  });
});
