/**
 * Greeting helpers.
 *
 * A tiny module that builds friendly greeting strings. Handy for demos
 * and as the canonical "hello world" of this repository.
 */

/**
 * Build a greeting for the given name.
 *
 * @param {string} [name] - The person to greet. Falls back to "world"
 *   when omitted, empty, or only whitespace.
 * @returns {string} A greeting such as "Hello, Ada!".
 */
function greet(name) {
  const who = typeof name === "string" && name.trim() !== "" ? name.trim() : "world";
  return `Hello, ${who}!`;
}

/**
 * Build a greeting for several names at once.
 *
 * @param {string[]} names - The people to greet.
 * @returns {string[]} One greeting per name.
 */
function greetAll(names) {
  if (!Array.isArray(names)) {
    throw new TypeError("greetAll expects an array of names");
  }
  return names.map((name) => greet(name));
}

module.exports = { greet, greetAll };
