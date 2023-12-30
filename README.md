# nodejs-testing-comparisons

A simple comparison of some of the major unit test tools on **TypeScript** files.

- node:test https://nodejs.org/api/test.html
- vitest https://vitest.dev/guide
- mocha+chai https://mochajs.org + https://www.chaijs.com
- jest https://jestjs.io

Each test is run via a run-timer.sh script to time the full call, not just what the tool outputs.

In the repo you will see each lib has it's name (however vitest uses *.test.ts).

The github action runs each test runner in its own step outputting the overall run time at the end.

## Results:

Both node:test & vitest are very fast and snappy. node:test is the clear winner.

1. node:test  (**494 ms**)
2. vitest  (**735 ms**)
3. mocha+chai (**1520 ms**)
4. jest (**3238 ms**)

https://github.com/j-d-carmichael/nodejs-testing-comparisons/actions/runs/7364348673/job/20044638154

## Conclusion 

Looking for a jest replacement in an exsiting project, go with vitest.

If you are looking for the fastest, go with node:test.

## Contribution

Please send.
