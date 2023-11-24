## issue_1124_rspack_resolver

## Summary

Resolver does not return stable value when resolving, causing a panic problem with `incrementalRebuild` and `cache` enabled.

The issue of incremental rebuild will be filed and addressed in other issue. Details will be added over there.

_This is a Windows issue. Please use Windows to reproduce_

## Install

```
pnpm install
```

## How to reproduce

1. Watch

```
pnpm watch
```

2. Save `src/files/a.js`

## Actual

After `src/files/a.js` is saved, there is an assertion error.

## Expected

Compiled successfully.
