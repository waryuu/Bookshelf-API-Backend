import { test } from "node:test";
import assert from "node:assert/strict";

import { sum } from "./index.js";

test("sum of 0 and 0 should be 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("sum of 1 and 2 should be 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("sum of -3 and 4 should be 1", () => {
  assert.strictEqual(sum(-3, 4), 1);
});

test("sum of 5 and -6 should be -1", () => {
  assert.strictEqual(sum(5, -6), -1);
});

test("sum of -7 and -8 should be -15", () => {
  assert.strictEqual(sum(-7, -8), -15);
});
