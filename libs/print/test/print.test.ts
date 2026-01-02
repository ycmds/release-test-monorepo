import * as assert from 'node:assert';
import { describe, test, mock } from 'node:test';

import { print } from '../src/index.js';

describe('print function tests', () => {
  test('should print a simple message', () => {
    const logMock = mock.method(console, 'log');

    print('Hello, World!');

    assert.strictEqual(logMock.mock.calls.length, 1);
    assert.strictEqual(logMock.mock.calls[0].arguments[0], 'Hello, World!');

    logMock.mock.restore();
  });

  test('should print an empty string', () => {
    const logMock = mock.method(console, 'log');

    print('');

    assert.strictEqual(logMock.mock.calls.length, 1);
    assert.strictEqual(logMock.mock.calls[0].arguments[0], '');

    logMock.mock.restore();
  });

  test('should print a message with numbers', () => {
    const logMock = mock.method(console, 'log');

    print('2 + 3 = 5');

    assert.strictEqual(logMock.mock.calls.length, 1);
    assert.strictEqual(logMock.mock.calls[0].arguments[0], '2 + 3 = 5');

    logMock.mock.restore();
  });

  test('should print a message with special characters', () => {
    const logMock = mock.method(console, 'log');

    print('Special: !@#$%^&*()');

    assert.strictEqual(logMock.mock.calls.length, 1);
    assert.strictEqual(logMock.mock.calls[0].arguments[0], 'Special: !@#$%^&*()');

    logMock.mock.restore();
  });

  test('should print a multiline message', () => {
    const logMock = mock.method(console, 'log');

    print('Line 1\nLine 2\nLine 3');

    assert.strictEqual(logMock.mock.calls.length, 1);
    assert.strictEqual(logMock.mock.calls[0].arguments[0], 'Line 1\nLine 2\nLine 3');

    logMock.mock.restore();
  });

  test('should print unicode characters', () => {
    const logMock = mock.method(console, 'log');

    print('Unicode: 😀 🎉 ✨');

    assert.strictEqual(logMock.mock.calls.length, 1);
    assert.strictEqual(logMock.mock.calls[0].arguments[0], 'Unicode: 😀 🎉 ✨');

    logMock.mock.restore();
  });

  test('should print formatted multiplication result', () => {
    const logMock = mock.method(console, 'log');

    print('5 × 3 = 15');

    assert.strictEqual(logMock.mock.calls.length, 1);
    assert.strictEqual(logMock.mock.calls[0].arguments[0], '5 × 3 = 15');

    logMock.mock.restore();
  });
});
