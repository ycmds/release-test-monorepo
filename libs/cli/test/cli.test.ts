import * as assert from 'node:assert';
import { describe, test } from 'node:test';

import { plus } from '@macrobe/plus';
import { multiply } from '@macrobe/multiply';
import { formatSum } from '@macrobe/format';
import { print } from '@macrobe/print';

describe('CLI package integration tests', () => {
  test('should have plus function available', () => {
    assert.strictEqual(typeof plus, 'function');
    assert.strictEqual(plus(2, 3), 5);
  });

  test('should have multiply function available', () => {
    assert.strictEqual(typeof multiply, 'function');
    assert.strictEqual(multiply(3, 4), 12);
  });

  test('should have formatSum function available', () => {
    assert.strictEqual(typeof formatSum, 'function');
    assert.strictEqual(formatSum(2, 3), '2 + 3 = 5');
  });

  test('should have print function available', () => {
    assert.strictEqual(typeof print, 'function');
  });

  test('should integrate plus and formatSum correctly', () => {
    const result = formatSum(10, 20);
    assert.strictEqual(result, '10 + 20 = 30');
  });

  test('should integrate multiply correctly', () => {
    const result = multiply(5, 6);
    assert.strictEqual(result, 30);
  });

  test('should format multiplication result correctly', () => {
    const a = 7;
    const b = 8;
    const result = multiply(a, b);
    const formatted = `${a} × ${b} = ${result}`;
    assert.strictEqual(formatted, '7 × 8 = 56');
  });

  test('should handle zero in plus operation', () => {
    const result = formatSum(0, 0);
    assert.strictEqual(result, '0 + 0 = 0');
  });

  test('should handle zero in multiply operation', () => {
    const result = multiply(5, 0);
    assert.strictEqual(result, 0);
  });

  test('should handle negative numbers in plus operation', () => {
    const result = formatSum(-5, 3);
    assert.strictEqual(result, '-5 + 3 = -2');
  });

  test('should handle negative numbers in multiply operation', () => {
    const result = multiply(-3, 4);
    assert.strictEqual(result, -12);
  });
});
