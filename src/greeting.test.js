const assert = require("node:assert");
const { test } = require("node:test");
const { greet, greetAll } = require("./greeting");

test("greets a named person", () => {
  assert.strictEqual(greet("Ada"), "Hello, Ada!");
});

test("trims surrounding whitespace", () => {
  assert.strictEqual(greet("  Grace  "), "Hello, Grace!");
});

test("falls back to world when no name is given", () => {
  assert.strictEqual(greet(), "Hello, world!");
  assert.strictEqual(greet("   "), "Hello, world!");
});

test("greets several people", () => {
  assert.deepStrictEqual(greetAll(["Ada", "Grace"]), [
    "Hello, Ada!",
    "Hello, Grace!",
  ]);
});

test("greetAll rejects non-array input", () => {
  assert.throws(() => greetAll("Ada"), TypeError);
});
