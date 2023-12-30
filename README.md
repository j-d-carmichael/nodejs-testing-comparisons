# nodejs-testing-comparisons

A simple comparison of some of the major unit test tools.

- node:test
- vitest
- mocha+chai
- jest


The built-in node:test lib is by far the fastest.

# Results:

1. node:test  (494 ms)
2. vitest  (735 ms)
3. mocha+chai (1520 ms)
    -  *the command does not recursively test all the tests though it looks like it only finds 1 or reports only on the last one, not clear, maybe a mocha user could assist*
4. jest (3238 ms)

https://github.com/j-d-carmichael/nodejs-testing-comparisons/actions/runs/7364348673/job/20044638154
