import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { plus, multiply } from '../src/index.js';

describe('plus function tests', () => {
  test('should add two positive numbers', () => {
    const result = plus(2, 3);
    assert.strictEqual(result, 5);
  });

  test('should add multiple positive numbers', () => {
    const result = plus(1, 2, 3, 4, 5);
    assert.strictEqual(result, 15);
  });

  test('should add negative numbers', () => {
    const result = plus(-5, -3);
    assert.strictEqual(result, -8);
  });

  test('should add mixed positive and negative numbers', () => {
    const result = plus(10, -5, 3, -2);
    assert.strictEqual(result, 6);
  });

  test('should return 0 when no arguments are provided', () => {
    const result = plus();
    assert.strictEqual(result, 0);
  });

  test('should return the same number when only one argument is provided', () => {
    const result = plus(42);
    assert.strictEqual(result, 42);
  });

  test('should handle zero values', () => {
    const result = plus(0, 0, 0);
    assert.strictEqual(result, 0);
  });

  test('should handle decimal numbers', () => {
    const result = plus(1.5, 2.5, 3.0);
    assert.strictEqual(result, 7.0);
  });

  test('should handle large numbers', () => {
    const result = plus(1000000, 2000000, 3000000);
    assert.strictEqual(result, 6000000);
  });

  test('should handle very small decimal numbers', () => {
    const result = plus(0.1, 0.2);
    // Note: floating point arithmetic may have precision issues
    assert.ok(Math.abs(result - 0.3) < 0.0000001);
  });

  test('should add negative and positive numbers to zero', () => {
    const result = plus(5, -5);
    assert.strictEqual(result, 0);
  });

  test('should handle array spread', () => {
    const numbers = [1, 2, 3, 4];
    const result = plus(...numbers);
    assert.strictEqual(result, 10);
  });

  test('should work with single negative number', () => {
    const result = plus(-7);
    assert.strictEqual(result, -7);
  });

  test('should handle many arguments', () => {
    const result = plus(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    assert.strictEqual(result, 10);
  });
});

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

  test('should handle multiplication chain concept', () => {
    // Демонстрация, что можно использовать результат multiply в plus
    const result1 = multiply(3, 4); // 12
    const result2 = multiply(2, 5); // 10
    const sum = plus(result1, result2); // 12 + 10 = 22
    assert.strictEqual(sum, 22);
  });
});
