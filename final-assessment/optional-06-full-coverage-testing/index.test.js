import test from "node:test";
import assert from "node:assert/strict";
import sum from "./index.js";

// 1. Valid number inputs
test("sum of 0 and 0 should be 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("sum of 1 and 2 should be 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

// 2. Invalid input: non-number types
test('sum of "3" and 4 should be 0', () => {
  assert.strictEqual(sum("3", 4), 0);
});

test('sum of 5 and "6" should be 0', () => {
  assert.strictEqual(sum(4, "5"), 0);
});

test('sum of "7" and "8" should be 0', () => {
  assert.strictEqual(sum("5", "6"), 0);
});

// 3. Negative inputs
test("sum of -9 and 10 should be 0", () => {
  assert.strictEqual(sum(-9, 10), 0);
});

test("sum of 11 and -12 should be 0", () => {
  assert.strictEqual(sum(2, -3), 0);
});

test("sum of -13 and -14 should be 0", () => {
  assert.strictEqual(sum(-3, -4), 0);
});
