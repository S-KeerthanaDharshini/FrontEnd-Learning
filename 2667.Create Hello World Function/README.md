
# [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/)

## Problem Statement

Write a function `createHelloWorld` that returns a new function. This returned function should always return the string `"Hello World"`, regardless of the arguments passed to it.

### Requirements:
- The function `createHelloWorld` should not take any parameters.
- The returned function should ignore all arguments passed to it and always return `"Hello World"`.

### Examples:

#### Example 1:
**Input:**  
`args = []`  
**Output:**  
`"Hello World"`  
**Explanation:**  
```javascript
const f = createHelloWorld();
f(); // Returns "Hello World"
```

#### Example 2:
**Input:**  
`args = [[], null, 42]`  
**Output:**  
`"Hello World"`  
**Explanation:**  
```javascript
const f = createHelloWorld();
f([], null, 42); // Still returns "Hello World"