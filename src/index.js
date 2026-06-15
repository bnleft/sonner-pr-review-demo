const { greet, greetAll } = require("./greeting");

// Print a greeting for any names passed on the command line,
// or a single default greeting when none are provided.
const names = process.argv.slice(2);

if (names.length === 0) {
  console.log(greet());
} else {
  for (const line of greetAll(names)) {
    console.log(line);
  }
}
