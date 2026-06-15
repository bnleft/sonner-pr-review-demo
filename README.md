# sonner-pr-review-demo

Dummy repository for testing a PR-review app's "Needs your review" queue.

## Greeting helper

This repo ships a tiny greeting module in [`src/greeting.js`](src/greeting.js).

```js
const { greet, greetAll } = require("./src/greeting");

greet("Ada");            // => "Hello, Ada!"
greet();                 // => "Hello, world!"
greetAll(["Ada", "Grace"]); // => ["Hello, Ada!", "Hello, Grace!"]
```

### CLI

Run it from the command line:

```sh
node src/index.js          # Hello, world!
node src/index.js Ada Grace # Hello, Ada! / Hello, Grace!
```

### Tests

The helpers are covered by Node's built-in test runner:

```sh
node --test
```
