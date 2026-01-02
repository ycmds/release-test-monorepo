import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { multiply } from '../src/index.js';

describe('multiply function tests', () => {
  test('should multiply two positive numbers', () => {
    const result = multiply(3, 4);
    assert.strictEqual(result, 12);
  });

  test('should multiply by zero', () => {
    assert.strictEqual(multiply(5, 0), 0);
    assert.strictEqual(multiply(0, 5), 0);
    assert.strictEqual(multiply(0, 0), 0);
  });

  test('should multiply by one', () => {
    assert.strictEqual(multiply(7, 1), 7);
    assert.strictEqual(multiply(1, 7), 7);
    assert.strictEqual(multiply(1, 1), 1);
  });

  test('should multiply two negative numbers', () => {
    const result = multiply(-3, -4);
    assert.strictEqual(result, 12);
  });

  test('should multiply positive and negative numbers', () => {
    assert.strictEqual(multiply(5, -3), -15);
    assert.strictEqual(multiply(-5, 3), -15);
  });

  test('should multiply small numbers', () => {
    const result = multiply(2, 3);
    assert.strictEqual(result, 6);
  });

  test('should multiply larger numbers', () => {
    const result = multiply(12, 8);
    assert.strictEqual(result, 96);
  });

  test('should handle multiplication with negative result', () => {
    const result = multiply(7, -2);
    assert.strictEqual(result, -14);
  });

  test('should multiply with commutative property', () => {
    const result1 = multiply(6, 7);
    const result2 = multiply(7, 6);
    assert.strictEqual(result1, result2);
    assert.strictEqual(result1, 42);
  });

  test('should handle edge case with -1', () => {
    assert.strictEqual(multiply(-1, 5), -5);
    assert.strictEqual(multiply(5, -1), -5);
    assert.strictEqual(multiply(-1, -1), 1);
  });

  test('should multiply two digit numbers', () => {
    const result = multiply(11, 9);
    assert.strictEqual(result, 99);
  });

  test('should handle multiplication results', () => {
    const result1 = multiply(3, 4); // 12
    const result2 = multiply(2, 5); // 10
    assert.strictEqual(result1, 12);
    assert.strictEqual(result2, 10);
  });
});
