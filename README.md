DESCRIPTION
===========

Running the `--watch` option successfully runs tests, but doesn't reload the implementation code.

To recreate:

    npm install
    ./node_modules/mocha/bin/mocha --reporter spec --watch

Edit `lib/pie.js` to print a message to the console.

You won't ever see that message.

Expected:

The message should be printed to the terminal.

Addendum:

The message is properly printed if you stop `mocha` and run it alone (for example, `npm test`).
